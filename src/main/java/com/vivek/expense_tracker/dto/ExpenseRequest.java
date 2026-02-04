package com.vivek.expense_tracker.dto;

import com.vivek.expense_tracker.entity.PaymentMethod;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class ExpenseRequest {

    @NotNull(message = "Amount is required")
    @DecimalMin(value = "0.01", message = "Amount must be greater than 0")
    private BigDecimal amount;

    @NotNull(message = "Category is required")
    private Long categoryId;

    @NotNull(message = "Date is required")
    @PastOrPresent(message = "Date cannot be in the future")
    private LocalDate date;

    private String description;

    @NotNull(message = "Payment method is required")
    private PaymentMethod paymentMethod;
}
