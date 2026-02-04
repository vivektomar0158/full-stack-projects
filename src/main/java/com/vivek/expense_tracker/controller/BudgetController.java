package com.vivek.expense_tracker.controller;

import com.vivek.expense_tracker.dto.BudgetRequest;
import com.vivek.expense_tracker.dto.BudgetResponse;
import com.vivek.expense_tracker.entity.User;
import com.vivek.expense_tracker.repository.UserRepository;
import com.vivek.expense_tracker.service.BudgetService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/budgets")
public class BudgetController {

    private final BudgetService budgetService;
    private final UserRepository userRepository;

    public BudgetController(BudgetService budgetService, UserRepository userRepository) {
        this.budgetService = budgetService;
        this.userRepository = userRepository;
    }

    private Long getCurrentUserId() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getId();
    }

    @PostMapping
    public ResponseEntity<BudgetResponse> createBudget(@Valid @RequestBody BudgetRequest request) {
        return new ResponseEntity<>(budgetService.createBudget(getCurrentUserId(), request), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<BudgetResponse>> getBudgets(
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) Integer month) {
        // Default to current month if not provided
        if (year == null || month == null) {
            LocalDate now = LocalDate.now();
            year = now.getYear();
            month = now.getMonthValue();
        }
        return ResponseEntity.ok(budgetService.getBudgetsByMonth(getCurrentUserId(), year, month));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BudgetResponse> updateBudget(@PathVariable Long id,
            @Valid @RequestBody BudgetRequest request) {
        return ResponseEntity.ok(budgetService.updateBudget(getCurrentUserId(), id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBudget(@PathVariable Long id) {
        budgetService.deleteBudget(getCurrentUserId(), id);
        return ResponseEntity.noContent().build();
    }
}
