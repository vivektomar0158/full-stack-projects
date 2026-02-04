package com.vivek.expense_tracker.repository;

import com.vivek.expense_tracker.entity.Expense;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface ExpenseRepository extends JpaRepository<Expense, Long> {

        // Find all expenses for a user with pagination
        Page<Expense> findByUserIdOrderByDateDesc(Long userId, Pageable pageable);

        // Find expenses by user and category
        Page<Expense> findByUserIdAndCategoryIdOrderByDateDesc(Long userId, Long categoryId, Pageable pageable);

        // Find expenses by user and date range
        Page<Expense> findByUserIdAndDateBetweenOrderByDateDesc(Long userId, LocalDate startDate, LocalDate endDate,
                        Pageable pageable);

        // Find expenses by user, category and date range
        Page<Expense> findByUserIdAndCategoryIdAndDateBetweenOrderByDateDesc(
                        Long userId, Long categoryId, LocalDate startDate, LocalDate endDate, Pageable pageable);

        // Get total expenses for a user in a date range
        @Query("SELECT COALESCE(SUM(e.amount), 0) FROM Expense e WHERE e.user.id = :userId AND e.date BETWEEN :startDate AND :endDate")
        BigDecimal getTotalByUserAndDateRange(@Param("userId") Long userId, @Param("startDate") LocalDate startDate,
                        @Param("endDate") LocalDate endDate);

        // Get category-wise totals for a user in a date range
        @Query("SELECT e.category.id, e.category.name, e.category.color, SUM(e.amount) " +
                        "FROM Expense e WHERE e.user.id = :userId AND e.date BETWEEN :startDate AND :endDate " +
                        "GROUP BY e.category.id, e.category.name, e.category.color")
        List<Object[]> getCategoryWiseTotals(@Param("userId") Long userId, @Param("startDate") LocalDate startDate,
                        @Param("endDate") LocalDate endDate);

        // Get daily totals for trend analysis
        @Query("SELECT e.date, SUM(e.amount) FROM Expense e " +
                        "WHERE e.user.id = :userId AND e.date BETWEEN :startDate AND :endDate " +
                        "GROUP BY e.date ORDER BY e.date")
        List<Object[]> getDailyTotals(@Param("userId") Long userId, @Param("startDate") LocalDate startDate,
                        @Param("endDate") LocalDate endDate);

        // Get total expenses for a user and category in a date range
        @Query("SELECT COALESCE(SUM(e.amount), 0) FROM Expense e WHERE e.user.id = :userId AND e.category.id = :categoryId AND e.date BETWEEN :startDate AND :endDate")
        BigDecimal getTotalByUserAndCategoryAndDateRange(@Param("userId") Long userId,
                        @Param("categoryId") Long categoryId,
                        @Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

        // Count transactions for dashboard
        Long countByUserIdAndDateBetween(Long userId, LocalDate startDate, LocalDate endDate);
}
