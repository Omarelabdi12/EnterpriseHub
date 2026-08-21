package com.enterprisehub.Backend.service;

import com.enterprisehub.Backend.dto.auth.LoginRequest;
import com.enterprisehub.Backend.dto.auth.LoginResponse;
import com.enterprisehub.Backend.entity.User;
import com.enterprisehub.Backend.repository.UserRepository;
import com.enterprisehub.Backend.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.email())
                .orElseThrow(() ->
                        new RuntimeException("Email ou mot de passe incorrect")
                );

        if (!user.isEnabled()) {
            throw new RuntimeException("Compte désactivé");
        }

        if (!passwordEncoder.matches(
                request.password(),
                user.getPasswordHash()
        )) {
            throw new RuntimeException("Email ou mot de passe incorrect");
        }

        String token = jwtService.generateToken(user);

        return new LoginResponse(
                token,
                "Bearer",
                user.getId(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getRole().name()
        );
    }

}