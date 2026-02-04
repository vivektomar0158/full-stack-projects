package com.vivek.expense_tracker.service;

import com.vivek.expense_tracker.dto.ExpenseRequest;
import com.vivek.expense_tracker.dto.ExpenseResponse;
import com.vivek.expense_tracker.entity.Category;
import com.vivek.expense_tracker.entity.Expense;
import com.vivek.expense_tracker.entity.User;
import com.vivek.expense_tracker.repository.CategoryRepository;
import com.vivek.expense_tracker.repository.ExpenseRepository;
import com.vivek.expense_tracker.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public ExpenseService(ExpenseRepository expenseRepository, CategoryRepository categoryRepository,
            UserRepository userRepository) {
        this.expenseRepository = expenseRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public ExpenseResponse createExpense(Long userId, ExpenseRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        // Validate that the category belongs to the user or is a default category
        if (category.getUser() != null && !category.getUser().getId().equals(userId)) {
            throw new AccessDeniedException("You do not have permission to use this category");
        }

        Expense expense = new Expense();
        expense.setAmount(request.getAmount());
        expense.setCategory(category);
        expense.setDate(request.getDate());
        expense.setDescription(request.getDescription());
        expense.setPaymentMethod(request.getPaymentMethod());
        expense.setUser(user);

        Expense savedExpense = expenseRepository.save(expense);
        return mapToResponse(savedExpense);
    }

    public Page<ExpenseResponse> getExpenses(Long userId, Long categoryId, LocalDate startDate, LocalDate endDate,
            Pageable pageable) {
        Page<Expense> expenses;

        if (categoryId != null && startDate != null && endDate != null) {
            expenses = expenseRepository.findByUserIdAndCategoryIdAndDateBetweenOrderByDateDesc(userId, categoryId,
                    startDate, endDate, pageable);
        } else if (categoryId != null) {
            expenses = expenseRepository.findByUserIdAndCategoryIdOrderByDateDesc(userId, categoryId, pageable);
        } else if (startDate != null && endDate != null) {
            expenses = expenseRepository.findByUserIdAndDateBetweenOrderByDateDesc(userId, startDate, endDate,
                    pageable);
        } else {
            expenses = expenseRepository.findByUserIdOrderByDateDesc(userId, pageable);
        }

        return expenses.map(this::mapToResponse);
    }

    public ExpenseResponse getExpenseById(Long userId, Long expenseId) {
        Expense expense = expenseRepository.findById(expenseId)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        if (!expense.getUser().getId().equals(userId)) {
            throw new AccessDeniedException("You do not have permission to access this expense");
        }

        return mapToResponse(expense);
    }

    @Transactional
    public ExpenseResponse updateExpense(Long userId, Long expenseId, ExpenseRequest request) {
        Expense expense = expenseRepository.findById(expenseId)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        if (!expense.getUser().getId().equals(userId)) {
            throw new AccessDeniedException("You do not have permission to update this expense");
        }

        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found"));

        if (category.getUser() != null && !category.getUser().getId().equals(userId)) {
            throw new AccessDeniedException("You do not have permission to use this category");
        }

        expense.setAmount(request.getAmount());
        expense.setCategory(category);
        expense.setDate(request.getDate());
        expense.setDescription(request.getDescription());
        expense.setPaymentMethod(request.getPaymentMethod());

        Expense updatedExpense = expenseRepository.save(expense);
        return mapToResponse(updatedExpense);
    }

    @Transactional
    public void deleteExpense(Long userId, Long expenseId) {
        Expense expense = expenseRepository.findById(expenseId)
                .orElseThrow(() -> new RuntimeException("Expense not found"));

        if (!expense.getUser().getId().equals(userId)) {
            throw new AccessDeniedException("You do not have permission to delete this expense");
        }

        expenseRepository.delete(expense);
    }

    private ExpenseResponse mapToResponse(Expense expense) {
        ExpenseResponse response = new ExpenseResponse();
        response.setId(expense.getId());
        response.setAmount(expense.getAmount());
        response.setCategoryId(expense.getCategory().getId());
        response.setCategoryName(expense.getCategory().getName());
        response.setCategoryColor(expense.getCategory().getColor());
        response.setCategoryIcon(expense.getCategory().getIcon());
        response.setDate(expense.getDate());
        response.setDescription(expense.getDescription());
        response.setPaymentMethod(expense.getPaymentMethod());
        response.setCreatedAt(expense.getCreatedAt());
        response.setUpdatedAt(expense.getUpdatedAt());
        return response;
    }
}
