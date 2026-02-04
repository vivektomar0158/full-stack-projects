package com.vivek.expense_tracker.controller;

import com.vivek.expense_tracker.dto.CategorySpending;
import com.vivek.expense_tracker.dto.DailyTrend;
import com.vivek.expense_tracker.dto.DashboardStatsResponse;
import com.vivek.expense_tracker.dto.MonthlyComparison;
import com.vivek.expense_tracker.entity.User;
import com.vivek.expense_tracker.repository.UserRepository;
import com.vivek.expense_tracker.service.DashboardService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final DashboardService dashboardService;
    private final UserRepository userRepository;

    public DashboardController(DashboardService dashboardService, UserRepository userRepository) {
        this.dashboardService = dashboardService;
        this.userRepository = userRepository;
    }

    private Long getCurrentUserId() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return user.getId();
    }

    @GetMapping("/stats")
    public ResponseEntity<DashboardStatsResponse> getStats() {
        return ResponseEntity.ok(dashboardService.getDashboardStats(getCurrentUserId()));
    }

    @GetMapping("/category-breakdown")
    public ResponseEntity<List<CategorySpending>> getCategoryBreakdown(
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) Integer month) {
        return ResponseEntity.ok(dashboardService.getCategoryBreakdown(getCurrentUserId(), year, month));
    }

    @GetMapping("/trends")
    public ResponseEntity<List<DailyTrend>> getDailyTrends(
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) Integer month) {
        return ResponseEntity.ok(dashboardService.getDailyTrend(getCurrentUserId(), year, month));
    }

    @GetMapping("/monthly-comparison")
    public ResponseEntity<MonthlyComparison> getMonthlyComparison() {
        return ResponseEntity.ok(dashboardService.getMonthlyComparison(getCurrentUserId()));
    }
}
