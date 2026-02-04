package com.vivek.expense_tracker.service;

import com.vivek.expense_tracker.dto.BudgetRequest;
import com.vivek.expense_tracker.dto.BudgetResponse;
import com.vivek.expense_tracker.entity.Budget;
import com.vivek.expense_tracker.entity.Category;
import com.vivek.expense_tracker.entity.User;
import com.vivek.expense_tracker.repository.BudgetRepository;
import com.vivek.expense_tracker.repository.CategoryRepository;
import com.vivek.expense_tracker.repository.ExpenseRepository;
import com.vivek.expense_tracker.repository.UserRepository;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BudgetService {

    private final BudgetRepository budgetRepository;
    private final ExpenseRepository expenseRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public BudgetService(BudgetRepository budgetRepository, ExpenseRepository expenseRepository,
            CategoryRepository categoryRepository, UserRepository userRepository) {
        this.budgetRepository = budgetRepository;
        this.expenseRepository = expenseRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public BudgetResponse createBudget(Long userId, BudgetRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        // Validate category ownership
        if (category.getUser() != null && !category.getUser().getId().equals(userId)) {
            throw new AccessDeniedException("You do not have permission to use this category");
        }

        String monthStr = String.format("%d-%02d", request.getYear(), request.getMonth());

        // Check if budget already exists
        Optional<Budget> existingBudget = budgetRepository.findByUserIdAndCategoryIdAndMonth(userId,
                request.getCategoryId(), monthStr);
        if (existingBudget.isPresent()) {
            throw new IllegalArgumentException("Budget for this category and month already exists");
        }

        Budget budget = new Budget();
        budget.setUser(user);
        budget.setCategory(category);
        budget.setMonthlyLimit(request.getMonthlyLimit());
        budget.setMonth(monthStr);

        Budget savedBudget = budgetRepository.save(budget);
        return mapToResponse(savedBudget, request.getYear(), request.getMonth());
    }

    public List<BudgetResponse> getBudgetsByMonth(Long userId, Integer year, Integer month) {
        String monthStr = String.format("%d-%02d", year, month);
        List<Budget> budgets = budgetRepository.findByUserIdAndMonth(userId, monthStr);
        return budgets.stream()
                .map(budget -> mapToResponse(budget, year, month))
                .collect(Collectors.toList());
    }

    @Transactional
    public BudgetResponse updateBudget(Long userId, Long budgetId, BudgetRequest request) {
        Budget budget = budgetRepository.findById(budgetId)
                .orElseThrow(() -> new RuntimeException("Budget not found"));

        if (!budget.getUser().getId().equals(userId)) {
            throw new AccessDeniedException("You do not have permission to update this budget");
        }

        // We only allow updating the limit, but if category changes, it's complex
        // because of unique constraints.
        // For simplicity, let's allow updating limit and category only if it doesn't
        // conflict.

        // Actually, usually users just update the limit. If they want to change
        // category/month, they delete and recreate.
        // Let's stick to updating the limit primarily.

        budget.setMonthlyLimit(request.getMonthlyLimit());
        // We could technically allow updating category/month if we really wanted to,
        // but let's keep it simple.

        Budget updatedBudget = budgetRepository.save(budget);

        // Parse month string back to year/month for response
        String[] parts = budget.getMonth().split("-");
        int year = Integer.parseInt(parts[0]);
        int month = Integer.parseInt(parts[1]);

        return mapToResponse(updatedBudget, year, month);
    }

    @Transactional
    public void deleteBudget(Long userId, Long budgetId) {
        Budget budget = budgetRepository.findById(budgetId)
                .orElseThrow(() -> new RuntimeException("Budget not found"));

        if (!budget.getUser().getId().equals(userId)) {
            throw new AccessDeniedException("You do not have permission to delete this budget");
        }

        budgetRepository.delete(budget);
    }

    private BudgetResponse mapToResponse(Budget budget, Integer year, Integer month) {
        BudgetResponse response = new BudgetResponse();
        response.setId(budget.getId());
        response.setCategoryId(budget.getCategory().getId());
        response.setCategoryName(budget.getCategory().getName());
        response.setCategoryColor(budget.getCategory().getColor());
        response.setCategoryIcon(budget.getCategory().getIcon());
        response.setMonthlyLimit(budget.getMonthlyLimit());
        response.setMonth(month);
        response.setYear(year);

        // Calculate usage
        YearMonth yearMonth = YearMonth.of(year, month);
        LocalDate startDate = yearMonth.atDay(1);
        LocalDate endDate = yearMonth.atEndOfMonth();

        BigDecimal totalSpent = expenseRepository.getTotalByUserAndCategoryAndDateRange(
                budget.getUser().getId(), budget.getCategory().getId(), startDate, endDate);

        response.setTotalSpent(totalSpent);
        response.setRemainingAmount(budget.getMonthlyLimit().subtract(totalSpent));

        if (budget.getMonthlyLimit().compareTo(BigDecimal.ZERO) > 0) {
            double percentage = totalSpent.divide(budget.getMonthlyLimit(), 4, RoundingMode.HALF_UP)
                    .multiply(new BigDecimal(100)).doubleValue();
            response.setPercentageUsed(percentage);
        } else {
            response.setPercentageUsed(0.0);
        }

        return response;
    }
}
