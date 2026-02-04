package com.vivek.expense_tracker.controller;

import com.vivek.expense_tracker.dto.ExpenseRequest;
import com.vivek.expense_tracker.dto.ExpenseResponse;
import com.vivek.expense_tracker.entity.User;
import com.vivek.expense_tracker.repository.UserRepository;
import com.vivek.expense_tracker.service.ExpenseService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;
    private final UserRepository userRepository;

    public ExpenseController(ExpenseService expenseService, UserRepository userRepository) {
        this.expenseService = expenseService;
        this.userRepository = userRepository;
    }

    private Long getCurrentUserId() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getId();
    }

    @PostMapping
    public ResponseEntity<ExpenseResponse> createExpense(@Valid @RequestBody ExpenseRequest request) {
        ExpenseResponse response = expenseService.createExpense(getCurrentUserId(), request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Page<ExpenseResponse>> getExpenses(
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "date") String sortBy,
            @RequestParam(defaultValue = "desc") String direction) {
        Sort sort = direction.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);

        Page<ExpenseResponse> expenses = expenseService.getExpenses(getCurrentUserId(), categoryId, startDate, endDate,
                pageable);
        return ResponseEntity.ok(expenses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ExpenseResponse> getExpenseById(@PathVariable Long id) {
        return ResponseEntity.ok(expenseService.getExpenseById(getCurrentUserId(), id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ExpenseResponse> updateExpense(@PathVariable Long id,
            @Valid @RequestBody ExpenseRequest request) {
        return ResponseEntity.ok(expenseService.updateExpense(getCurrentUserId(), id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExpense(@PathVariable Long id) {
        expenseService.deleteExpense(getCurrentUserId(), id);
        return ResponseEntity.noContent().build();
    }
}
