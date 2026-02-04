package com.vivek.expense_tracker.service;

import com.vivek.expense_tracker.entity.Category;
import com.vivek.expense_tracker.entity.User;
import com.vivek.expense_tracker.repository.CategoryRepository;
import com.vivek.expense_tracker.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public CategoryService(CategoryRepository categoryRepository, UserRepository userRepository) {
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }

    /**
     * Get all categories available for a user (default + custom)
     */
    public List<Category> getCategoriesForUser(Long userId) {
        return categoryRepository.findByUserIdOrDefault(userId);
    }

    /**
     * Get only default categories
     */
    public List<Category> getDefaultCategories() {
        return categoryRepository.findByUserIsNull();
    }

    /**
     * Create a new custom category for a user
     */
    @Transactional
    public Category createCategory(Long userId, Category category) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        category.setUser(user);
        return categoryRepository.save(category);
    }

    /**
     * Initialize default categories if none exist
     */
    @Transactional
    public void initDefaultCategories() {
        if (categoryRepository.findByUserIsNull().isEmpty()) {
            List<Category> defaults = List.of(
                    createDefaultCategory("Food", "#FF5733", "utensils"),
                    createDefaultCategory("Transport", "#33FF57", "car"),
                    createDefaultCategory("Shopping", "#3357FF", "shopping-bag"),
                    createDefaultCategory("Entertainment", "#FF33A8", "film"),
                    createDefaultCategory("Bills", "#33FFF5", "file-text"),
                    createDefaultCategory("Health", "#FF3333", "heart"),
                    createDefaultCategory("Education", "#A833FF", "book"),
                    createDefaultCategory("Other", "#808080", "more-horizontal"));
            categoryRepository.saveAll(defaults);
        }
    }

    private Category createDefaultCategory(String name, String color, String icon) {
        Category category = new Category();
        category.setName(name);
        category.setColor(color);
        category.setIcon(icon);
        category.setUser(null); // Explicitly null for default
        return category;
    }
}
