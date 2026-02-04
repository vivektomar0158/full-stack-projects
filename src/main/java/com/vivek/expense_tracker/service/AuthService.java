package com.vivek.expense_tracker.service;

import com.vivek.expense_tracker.dto.AuthResponse;
import com.vivek.expense_tracker.dto.LoginRequest;
import com.vivek.expense_tracker.dto.RegisterRequest;
import com.vivek.expense_tracker.entity.User;
import com.vivek.expense_tracker.repository.UserRepository;
import com.vivek.expense_tracker.security.JwtTokenProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;
    private final AuthenticationManager authenticationManager;

    public AuthService(UserRepository userRepository,
            PasswordEncoder passwordEncoder,
            JwtTokenProvider tokenProvider,
            AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
        this.authenticationManager = authenticationManager;
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        // Check if email already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already in use");
        }

        // Create new user
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setCreatedAt(LocalDateTime.now());

        User savedUser = userRepository.save(user);

        // Generate JWT token
        String token = tokenProvider.generateTokenFromUsername(savedUser.getEmail());

        return new AuthResponse(
                token,
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getEmail());
    }

    public AuthResponse login(LoginRequest request) {
        // Authenticate user
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Generate JWT token
        String token = tokenProvider.generateToken(authentication);

        // Get user details
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        return new AuthResponse(
                token,
                user.getId(),
                user.getName(),
                user.getEmail());
    }
}
