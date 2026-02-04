package com.vivek.expense_tracker.dto;

import com.vivek.expense_tracker.entity.PaymentMethod;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class ExpenseResponse {
    private Long id;
    private BigDecimal amount;
    private Long categoryId;
    private String categoryName;
    private String categoryColor;
    private String categoryIcon;
    private LocalDate date;
    private String description;
    private PaymentMethod paymentMethod;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
