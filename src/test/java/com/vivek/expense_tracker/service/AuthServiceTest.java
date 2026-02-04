package com.vivek.expense_tracker.service;

import com.vivek.expense_tracker.dto.AuthResponse;
import com.vivek.expense_tracker.dto.LoginRequest;
import com.vivek.expense_tracker.dto.RegisterRequest;
import com.vivek.expense_tracker.entity.User;
import com.vivek.expense_tracker.repository.UserRepository;
import com.vivek.expense_tracker.security.JwtTokenProvider;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtTokenProvider tokenProvider;

    @Mock
    private AuthenticationManager authenticationManager;

    @InjectMocks
    private AuthService authService;

    private User user;
    private RegisterRequest registerRequest;
    private LoginRequest loginRequest;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setId(1L);
        user.setName("Test User");
        user.setEmail("test@example.com");
        user.setPassword("encodedPassword");

        registerRequest = new RegisterRequest();
        registerRequest.setName("Test User");
        registerRequest.setEmail("test@example.com");
        registerRequest.setPassword("password");

        loginRequest = new LoginRequest();
        loginRequest.setEmail("test@example.com");
        loginRequest.setPassword("password");
    }

    @Test
    void register_Success() {
        when(userRepository.existsByEmail(anyString())).thenReturn(false);
        when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");
        when(userRepository.save(any(User.class))).thenReturn(user);
        when(tokenProvider.generateTokenFromUsername(anyString())).thenReturn("jwtToken");

        AuthResponse response = authService.register(registerRequest);

        assertNotNull(response);
        assertEquals("jwtToken", response.getToken());
        assertEquals(user.getEmail(), response.getEmail());
        verify(userRepository).save(any(User.class));
    }

    @Test
    void register_EmailAlreadyExists() {
        when(userRepository.existsByEmail(anyString())).thenReturn(true);

        assertThrows(RuntimeException.class, () -> authService.register(registerRequest));
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    void login_Success() {
        Authentication authentication = mock(Authentication.class);
        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class)))
                .thenReturn(authentication);
        when(tokenProvider.generateToken(any(Authentication.class))).thenReturn("jwtToken");
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.of(user));

        AuthResponse response = authService.login(loginRequest);

        assertNotNull(response);
        assertEquals("jwtToken", response.getToken());
        assertEquals(user.getEmail(), response.getEmail());
    }

    @Test
    void login_UserNotFound() {
        Authentication authentication = mock(Authentication.class);
        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class)))
                .thenReturn(authentication);
        when(tokenProvider.generateToken(any(Authentication.class))).thenReturn("jwtToken");
        when(userRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> authService.login(loginRequest));
    }
}
