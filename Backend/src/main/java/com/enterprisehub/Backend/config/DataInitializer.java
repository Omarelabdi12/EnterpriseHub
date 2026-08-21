package com.enterprisehub.Backend.config;

import com.enterprisehub.Backend.entity.Role;
import com.enterprisehub.Backend.entity.User;
import com.enterprisehub.Backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initUsers(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder
    ) {
        return args -> {

            String email = "owner@enterprisehub.com";

            if (!userRepository.existsByEmail(email)) {

                User user = new User();

                user.setEmail(email);
                user.setPasswordHash(
                        passwordEncoder.encode("Password123!")
                );
                user.setFirstName("Enterprise");
                user.setLastName("Owner");
                user.setRole(Role.STORE_OWNER);
                user.setEnabled(true);

                userRepository.save(user);

                System.out.println("=================================");
                System.out.println("Default STORE_OWNER created");
                System.out.println("Email: " + email);
                System.out.println("=================================");
            }
        };
    }
}