package com.vivek.expense_tracker.dto;

import lombok.Data;

@Data
public class CategoryDto {
    private Long id;
    private String name;
    private String color;
    private String icon;
    private Long userId; // null for default categories
}
