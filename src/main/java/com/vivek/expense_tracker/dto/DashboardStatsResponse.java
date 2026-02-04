package com.vivek.expense_tracker.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class DashboardStatsResponse {
    private BigDecimal totalSpentThisMonth;
    private BigDecimal totalSpentToday;
    private Long transactionCountThisMonth;
    private BigDecimal averageDailySpending;
}
