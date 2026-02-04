package com.vivek.expense_tracker.dto;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class BudgetResponse {
    private Long id;
    private Long categoryId;
    private String categoryName;
    private String categoryColor;
    private String categoryIcon;
    private BigDecimal monthlyLimit;
    private Integer month;
    private Integer year;

    // Calculated fields
    private BigDecimal totalSpent;
    private BigDecimal remainingAmount;
    private Double percentageUsed;
}
