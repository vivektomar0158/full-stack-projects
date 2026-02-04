package com.vivek.expense_tracker.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategorySpending {
    private Long categoryId;
    private String categoryName;
    private String categoryColor;
    private BigDecimal amount;
    private Double percentage;
}
