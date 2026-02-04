package com.vivek.expense_tracker.service;

import com.vivek.expense_tracker.dto.ExpenseRequest;
import com.vivek.expense_tracker.dto.ExpenseResponse;
import com.vivek.expense_tracker.entity.Category;
import com.vivek.expense_tracker.entity.Expense;
import com.vivek.expense_tracker.entity.PaymentMethod;
import com.vivek.expense_tracker.entity.User;
import com.vivek.expense_tracker.repository.CategoryRepository;
import com.vivek.expense_tracker.repository.ExpenseRepository;
import com.vivek.expense_tracker.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ExpenseServiceTest {

    @Mock
    private ExpenseRepository expenseRepository;

    @Mock
    private CategoryRepository categoryRepository;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private ExpenseService expenseService;

    private User user;
    private Category category;
    private Expense expense;
    private ExpenseRequest expenseRequest;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setId(1L);
        user.setName("Test User");

        category = new Category();
        category.setId(1L);
        category.setName("Food");
        category.setUser(user);

        expense = new Expense();
        expense.setId(1L);
        expense.setAmount(BigDecimal.valueOf(100.00));
        expense.setDate(LocalDate.now());
        expense.setDescription("Lunch");
        expense.setCategory(category);
        expense.setUser(user);
        expense.setPaymentMethod(PaymentMethod.CASH);

        expenseRequest = new ExpenseRequest();
        expenseRequest.setAmount(BigDecimal.valueOf(100.00));
        expenseRequest.setCategoryId(1L);
        expenseRequest.setDate(LocalDate.now());
        expenseRequest.setDescription("Lunch");
        expenseRequest.setPaymentMethod(PaymentMethod.CASH);
    }

    @Test
    void createExpense_Success() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(categoryRepository.findById(1L)).thenReturn(Optional.of(category));
        when(expenseRepository.save(any(Expense.class))).thenReturn(expense);

        ExpenseResponse response = expenseService.createExpense(1L, expenseRequest);

        assertNotNull(response);
        assertEquals(BigDecimal.valueOf(100.00), response.getAmount());
        assertEquals("Lunch", response.getDescription());
        verify(expenseRepository).save(any(Expense.class));
    }

    @Test
    void createExpense_UserNotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> expenseService.createExpense(1L, expenseRequest));
    }

    @Test
    void createExpense_CategoryNotFound() {
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(categoryRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> expenseService.createExpense(1L, expenseRequest));
    }

    @Test
    void createExpense_AccessDeniedToCategory() {
        User otherUser = new User();
        otherUser.setId(2L);
        Category otherCategory = new Category();
        otherCategory.setId(2L);
        otherCategory.setUser(otherUser);

        expenseRequest.setCategoryId(2L);

        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(categoryRepository.findById(2L)).thenReturn(Optional.of(otherCategory));

        assertThrows(AccessDeniedException.class, () -> expenseService.createExpense(1L, expenseRequest));
    }

    @Test
    void getExpenseById_Success() {
        when(expenseRepository.findById(1L)).thenReturn(Optional.of(expense));

        ExpenseResponse response = expenseService.getExpenseById(1L, 1L);

        assertNotNull(response);
        assertEquals(1L, response.getId());
    }

    @Test
    void getExpenseById_AccessDenied() {
        when(expenseRepository.findById(1L)).thenReturn(Optional.of(expense));

        assertThrows(AccessDeniedException.class, () -> expenseService.getExpenseById(2L, 1L));
    }

    @Test
    void deleteExpense_Success() {
        when(expenseRepository.findById(1L)).thenReturn(Optional.of(expense));

        expenseService.deleteExpense(1L, 1L);

        verify(expenseRepository).delete(expense);
    }

    @Test
    void getExpenses_Success() {
        Page<Expense> page = new PageImpl<>(List.of(expense));
        when(expenseRepository.findByUserIdOrderByDateDesc(eq(1L), any(Pageable.class))).thenReturn(page);

        Page<ExpenseResponse> response = expenseService.getExpenses(1L, null, null, null, Pageable.unpaged());

        assertEquals(1, response.getTotalElements());
    }
}
