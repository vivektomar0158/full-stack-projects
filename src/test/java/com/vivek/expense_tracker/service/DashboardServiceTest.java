package com.vivek.expense_tracker.service;

import com.vivek.expense_tracker.dto.CategorySpending;
import com.vivek.expense_tracker.dto.DashboardStatsResponse;
import com.vivek.expense_tracker.dto.MonthlyComparison;
import com.vivek.expense_tracker.repository.ExpenseRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class DashboardServiceTest {

    @Mock
    private ExpenseRepository expenseRepository;

    @InjectMocks
    private DashboardService dashboardService;

    @Test
    void getDashboardStats_Success() {
        when(expenseRepository.getTotalByUserAndDateRange(anyLong(), any(LocalDate.class), any(LocalDate.class)))
                .thenReturn(BigDecimal.valueOf(1000.00));
        when(expenseRepository.countByUserIdAndDateBetween(anyLong(), any(LocalDate.class), any(LocalDate.class)))
                .thenReturn(10L);

        DashboardStatsResponse response = dashboardService.getDashboardStats(1L);

        assertNotNull(response);
        assertEquals(BigDecimal.valueOf(1000.00), response.getTotalSpentThisMonth());
        assertEquals(10L, response.getTransactionCountThisMonth());
    }

    @Test
    void getCategoryBreakdown_Success() {
        Object[] row = { 1L, "Food", "#FFFFFF", BigDecimal.valueOf(100.00) };
        List<Object[]> rows = Collections.singletonList(row);
        when(expenseRepository.getCategoryWiseTotals(anyLong(), any(LocalDate.class), any(LocalDate.class)))
                .thenReturn(rows);
        when(expenseRepository.getTotalByUserAndDateRange(anyLong(), any(LocalDate.class), any(LocalDate.class)))
                .thenReturn(BigDecimal.valueOf(100.00));

        List<CategorySpending> response = dashboardService.getCategoryBreakdown(1L, 2024, 5);

        assertEquals(1, response.size());
        assertEquals("Food", response.get(0).getCategoryName());
        assertEquals(100.0, response.get(0).getPercentage());
    }

    @Test
    void getMonthlyComparison_Increase() {
        when(expenseRepository.getTotalByUserAndDateRange(anyLong(), any(LocalDate.class), any(LocalDate.class)))
                .thenReturn(BigDecimal.valueOf(200.00)) // Current month
                .thenReturn(BigDecimal.valueOf(100.00)); // Previous month

        MonthlyComparison response = dashboardService.getMonthlyComparison(1L);

        assertEquals("INCREASED", response.getStatus());
        assertEquals(100.0, response.getPercentageChange());
    }

    @Test
    void getMonthlyComparison_Decrease() {
        when(expenseRepository.getTotalByUserAndDateRange(anyLong(), any(LocalDate.class), any(LocalDate.class)))
                .thenReturn(BigDecimal.valueOf(50.00)) // Current month
                .thenReturn(BigDecimal.valueOf(100.00)); // Previous month

        MonthlyComparison response = dashboardService.getMonthlyComparison(1L);

        assertEquals("DECREASED", response.getStatus());
        assertEquals(-50.0, response.getPercentageChange());
    }
}
