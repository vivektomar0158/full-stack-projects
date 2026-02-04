package com.vivek.expense_tracker.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Builder
public class MonthlyComparison {
    private BigDecimal currentMonthSpent;
    private BigDecimal previousMonthSpent;
    private Double percentageChange;
    private String status; // "INCREASED", "DECREASED", "NO_CHANGE"
}
