package com.enterprisehub.Backend.controller;

import com.enterprisehub.Backend.dto.auth.LoginRequest;
import com.enterprisehub.Backend.dto.auth.LoginResponse;
import com.enterprisehub.Backend.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(
                authService.login(request)
        );
    }
}