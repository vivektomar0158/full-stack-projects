package com.vivek.expense_tracker.repository;

import com.vivek.expense_tracker.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    // Get both default categories (user_id is null) and user's custom categories
    @Query("SELECT c FROM Category c WHERE c.user.id = :userId OR c.user IS NULL")
    List<Category> findByUserIdOrDefault(@Param("userId") Long userId);

    // Get only default categories
    List<Category> findByUserIsNull();
}
