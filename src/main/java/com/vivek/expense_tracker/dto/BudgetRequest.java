package com.vivek.expense_tracker.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class BudgetRequest {

    @NotNull(message = "Category is required")
    private Long categoryId;

    @NotNull(message = "Monthly limit is required")
    @DecimalMin(value = "0.01", message = "Limit must be greater than 0")
    private BigDecimal monthlyLimit;

    @NotNull(message = "Month is required")
    @Min(value = 1, message = "Month must be between 1 and 12")
    private Integer month;

    @NotNull(message = "Year is required")
    @Min(value = 2024, message = "Year must be valid")
    private Integer year;
}
