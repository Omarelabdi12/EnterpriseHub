package com.enterprisehub.Backend.dto;

import java.time.LocalDateTime;

public record EmployeeResponse(
        Long id,
        String firstName,
        String lastName,
        String email,
        String role,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}