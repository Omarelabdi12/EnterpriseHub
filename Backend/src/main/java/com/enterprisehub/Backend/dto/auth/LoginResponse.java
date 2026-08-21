package com.enterprisehub.Backend.dto.auth;

public record LoginResponse(
        String token,
        String tokenType,
        Long userId,
        String email,
        String firstName,
        String lastName,
        String role
) {
}