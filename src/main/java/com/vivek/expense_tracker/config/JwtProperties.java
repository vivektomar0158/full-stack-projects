package com.vivek.expense_tracker.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import lombok.Data;

@Data
@Configuration
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {

    /**
     * Secret key used for JWT token signing and verification
     */
    private String secret;

    /**
     * JWT token expiration time in milliseconds
     * Default: 86400000 (24 hours)
     */
    private long expiration;
}
