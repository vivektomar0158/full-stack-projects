package com.vivek.expense_tracker.config;

import com.vivek.expense_tracker.service.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Component
@Profile("!test")
public class DataLoader implements CommandLineRunner {

    private final CategoryService categoryService;

    public DataLoader(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @Override
    public void run(String... args) throws Exception {
        categoryService.initDefaultCategories();
    }
}
