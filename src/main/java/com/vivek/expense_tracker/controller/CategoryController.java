package com.vivek.expense_tracker.controller;

import com.vivek.expense_tracker.dto.CategoryDto;
import com.vivek.expense_tracker.entity.Category;
import com.vivek.expense_tracker.entity.User;
import com.vivek.expense_tracker.repository.UserRepository;
import com.vivek.expense_tracker.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {

    private final CategoryService categoryService;
    private final UserRepository userRepository;

    public CategoryController(CategoryService categoryService, UserRepository userRepository) {
        this.categoryService = categoryService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<Category>> getCategories() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<Category> categories = categoryService.getCategoriesForUser(user.getId());
        return ResponseEntity.ok(categories);
    }

    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody CategoryDto categoryDto) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Category category = new Category();
        category.setName(categoryDto.getName());
        category.setColor(categoryDto.getColor());
        category.setIcon(categoryDto.getIcon());

        Category savedCategory = categoryService.createCategory(user.getId(), category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }
}
