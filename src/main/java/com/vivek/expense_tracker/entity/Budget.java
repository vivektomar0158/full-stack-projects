package com.vivek.expense_tracker.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Entity
@Table(name = "budgets", uniqueConstraints = {
        @UniqueConstraint(columnNames = { "user_id", "category_id", "month" })
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Budget {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(name = "monthly_limit", nullable = false, precision = 10, scale = 2)
    private BigDecimal monthlyLimit;

    @Column(nullable = false, length = 7) // Format: YYYY-MM
    private String month;
}
