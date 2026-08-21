package com.enterprisehub.Backend.dto.auth;

public record LoginRequest(
        String email,
        String password
) {
}