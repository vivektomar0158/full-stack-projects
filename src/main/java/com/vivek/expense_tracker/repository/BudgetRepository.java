package com.vivek.expense_tracker.repository;

import com.vivek.expense_tracker.entity.Budget;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface BudgetRepository extends JpaRepository<Budget, Long> {

    // Find all budgets for a user in a specific month
    List<Budget> findByUserIdAndMonth(Long userId, String month);

    // Find specific budget for user, category and month
    Optional<Budget> findByUserIdAndCategoryIdAndMonth(Long userId, Long categoryId, String month);

    // Find all budgets for a user
    List<Budget> findByUserId(Long userId);
}
