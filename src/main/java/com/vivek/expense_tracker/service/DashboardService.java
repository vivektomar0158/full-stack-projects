package com.vivek.expense_tracker.service;

import com.vivek.expense_tracker.dto.CategorySpending;
import com.vivek.expense_tracker.dto.DailyTrend;
import com.vivek.expense_tracker.dto.DashboardStatsResponse;
import com.vivek.expense_tracker.dto.MonthlyComparison;
import com.vivek.expense_tracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.ArrayList;
import java.util.List;

@Service
public class DashboardService {

    private final ExpenseRepository expenseRepository;

    public DashboardService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public DashboardStatsResponse getDashboardStats(Long userId) {
        LocalDate today = LocalDate.now();
        YearMonth currentYearMonth = YearMonth.from(today);
        LocalDate startOfMonth = currentYearMonth.atDay(1);
        LocalDate endOfMonth = currentYearMonth.atEndOfMonth();

        // 1. Total spent this month
        BigDecimal totalSpentThisMonth = expenseRepository.getTotalByUserAndDateRange(userId, startOfMonth, endOfMonth);

        // 2. Total spent today
        BigDecimal totalSpentToday = expenseRepository.getTotalByUserAndDateRange(userId, today, today);

        // 3. Transaction count this month
        Long transactionCount = expenseRepository.countByUserIdAndDateBetween(userId, startOfMonth, endOfMonth);

        // 4. Average daily spending (Total / days passed)
        BigDecimal averageDailySpending = BigDecimal.ZERO;
        int daysPassed = today.getDayOfMonth();
        if (daysPassed > 0 && totalSpentThisMonth.compareTo(BigDecimal.ZERO) > 0) {
            averageDailySpending = totalSpentThisMonth.divide(BigDecimal.valueOf(daysPassed), 2, RoundingMode.HALF_UP);
        }

        return DashboardStatsResponse.builder()
                .totalSpentThisMonth(totalSpentThisMonth)
                .totalSpentToday(totalSpentToday)
                .transactionCountThisMonth(transactionCount)
                .averageDailySpending(averageDailySpending)
                .build();
    }

    public List<CategorySpending> getCategoryBreakdown(Long userId, Integer year, Integer month) {
        LocalDate startDate;
        LocalDate endDate;

        if (year != null && month != null) {
            YearMonth ym = YearMonth.of(year, month);
            startDate = ym.atDay(1);
            endDate = ym.atEndOfMonth();
        } else {
            YearMonth current = YearMonth.now();
            startDate = current.atDay(1);
            endDate = current.atEndOfMonth();
        }

        List<Object[]> results = expenseRepository.getCategoryWiseTotals(userId, startDate, endDate);
        BigDecimal totalSpent = expenseRepository.getTotalByUserAndDateRange(userId, startDate, endDate);

        List<CategorySpending> breakdown = new ArrayList<>();

        for (Object[] result : results) {
            Long categoryId = (Long) result[0];
            String name = (String) result[1];
            String color = (String) result[2];
            BigDecimal amount = (BigDecimal) result[3];

            Double percentage = 0.0;
            if (totalSpent.compareTo(BigDecimal.ZERO) > 0) {
                percentage = amount.divide(totalSpent, 4, RoundingMode.HALF_UP)
                        .multiply(new BigDecimal(100)).doubleValue();
            }

            breakdown.add(new CategorySpending(categoryId, name, color, amount, percentage));
        }

        return breakdown;
    }

    public List<DailyTrend> getDailyTrend(Long userId, Integer year, Integer month) {
        LocalDate startDate;
        LocalDate endDate;

        if (year != null && month != null) {
            YearMonth ym = YearMonth.of(year, month);
            startDate = ym.atDay(1);
            endDate = ym.atEndOfMonth();
        } else {
            YearMonth current = YearMonth.now();
            startDate = current.atDay(1);
            endDate = current.atEndOfMonth();
        }

        List<Object[]> results = expenseRepository.getDailyTotals(userId, startDate, endDate);
        List<DailyTrend> trends = new ArrayList<>();

        for (Object[] result : results) {
            LocalDate date;
            if (result[0] instanceof java.sql.Date) {
                date = ((java.sql.Date) result[0]).toLocalDate();
            } else {
                date = (LocalDate) result[0];
            }
            BigDecimal amount = (BigDecimal) result[1];
            trends.add(new DailyTrend(date, amount));
        }

        return trends;
    }

    public MonthlyComparison getMonthlyComparison(Long userId) {
        YearMonth current = YearMonth.now();
        YearMonth previous = current.minusMonths(1);

        BigDecimal currentMonthTotal = expenseRepository.getTotalByUserAndDateRange(
                userId, current.atDay(1), current.atEndOfMonth());

        BigDecimal previousMonthTotal = expenseRepository.getTotalByUserAndDateRange(
                userId, previous.atDay(1), previous.atEndOfMonth());

        Double percentageChange = 0.0;
        String status = "NO_CHANGE";

        if (previousMonthTotal.compareTo(BigDecimal.ZERO) > 0) {
            BigDecimal change = currentMonthTotal.subtract(previousMonthTotal);
            percentageChange = change.divide(previousMonthTotal, 4, RoundingMode.HALF_UP)
                    .multiply(new BigDecimal(100)).doubleValue();

            if (percentageChange > 0)
                status = "INCREASED";
            else if (percentageChange < 0)
                status = "DECREASED";
        } else if (currentMonthTotal.compareTo(BigDecimal.ZERO) > 0) {
            percentageChange = 100.0;
            status = "INCREASED";
        }

        return MonthlyComparison.builder()
                .currentMonthSpent(currentMonthTotal)
                .previousMonthSpent(previousMonthTotal)
                .percentageChange(percentageChange)
                .status(status)
                .build();
    }
}
