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
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.access.AccessDeniedException;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BudgetServiceTest {

    @Mock
    private BudgetRepository budgetRepository;

    @Mock
    private ExpenseRepository expenseRepository;

    @Mock
    private CategoryRepository categoryRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private BudgetService budgetService;

    private User user;
    private Category category;
    private Budget budget;
    private BudgetRequest budgetRequest;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setId(1L);
        user.setName("Test User");

        category = new Category();
        category.setId(1L);
        category.setName("Food");
        category.setUser(user);

        budget = new Budget();
        budget.setId(1L);
        budget.setUser(user);
        budget.setCategory(category);
        budget.setMonthlyLimit(BigDecimal.valueOf(500.00));
        budget.setMonth("2024-05");

        budgetRequest = new BudgetRequest();
        budgetRequest.setCategoryId(1L);
        budgetRequest.setMonthlyLimit(BigDecimal.valueOf(500.00));
        budgetRequest.setYear(2024);
        budgetRequest.setMonth(5);
    }

    @Test
    void createBudget_Success() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(categoryRepository.findById(1L)).thenReturn(Optional.of(category));
        when(budgetRepository.findByUserIdAndCategoryIdAndMonth(anyLong(), anyLong(), anyString()))
                .thenReturn(Optional.empty());
        when(budgetRepository.save(any(Budget.class))).thenReturn(budget);
        when(expenseRepository.getTotalByUserAndCategoryAndDateRange(anyLong(), anyLong(), any(LocalDate.class),
                any(LocalDate.class)))
                .thenReturn(BigDecimal.ZERO);

        BudgetResponse response = budgetService.createBudget(1L, budgetRequest);

        assertNotNull(response);
        assertEquals(BigDecimal.valueOf(500.00), response.getMonthlyLimit());
        assertEquals(0.0, response.getPercentageUsed());
    }

    @Test
    void createBudget_Duplicate() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(categoryRepository.findById(1L)).thenReturn(Optional.of(category));
        when(budgetRepository.findByUserIdAndCategoryIdAndMonth(anyLong(), anyLong(), anyString()))
                .thenReturn(Optional.of(budget));

        assertThrows(IllegalArgumentException.class, () -> budgetService.createBudget(1L, budgetRequest));
    }

    @Test
    void updateBudget_Success() {
        when(budgetRepository.findById(1L)).thenReturn(Optional.of(budget));
        when(budgetRepository.save(any(Budget.class))).thenReturn(budget);
        when(expenseRepository.getTotalByUserAndCategoryAndDateRange(anyLong(), anyLong(), any(LocalDate.class),
                any(LocalDate.class)))
                .thenReturn(BigDecimal.ZERO);

        BudgetResponse response = budgetService.updateBudget(1L, 1L, budgetRequest);

        assertNotNull(response);
        verify(budgetRepository).save(any(Budget.class));
    }

    @Test
    void deleteBudget_Success() {
        when(budgetRepository.findById(1L)).thenReturn(Optional.of(budget));

        budgetService.deleteBudget(1L, 1L);

        verify(budgetRepository).delete(budget);
    }

    @Test
    void deleteBudget_AccessDenied() {
        User otherUser = new User();
        otherUser.setId(2L);
        budget.setUser(otherUser);

        when(budgetRepository.findById(1L)).thenReturn(Optional.of(budget));

        assertThrows(AccessDeniedException.class, () -> budgetService.deleteBudget(1L, 1L));
    }
}
