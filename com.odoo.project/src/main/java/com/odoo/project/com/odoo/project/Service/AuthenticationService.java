package com.odoo.project.com.odoo.project.Service;

import com.yourpackage.dto.AuthRequest;
import com.yourpackage.dto.AuthResponse;
import com.yourpackage.dto.RegisterRequest;
import com.yourpackage.model.User;
import com.yourpackage.repository.UserRepository;
import com.yourpackage.security.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    public AuthResponse register(RegisterRequest req) {
        User user = new User();
        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPassword(passwordEncoder.encode(req.getPassword()));
        user.setRole("USER");
        user.setLocation(req.getLocation());
        user.setAvailability(req.getAvailability());
        user.setPhotoUrl(req.getPhotoUrl());
        user.setPublic(req.isPublic());
        user.setSkillsOffered(req.getSkillsOffered());
        user.setSkillsWanted(req.getSkillsWanted());
        userRepository.save(user);

        String token = jwtUtils.generateToken(user.getId(), user.getRole());
        return new AuthResponse(token);
    }

    public AuthResponse authenticate(AuthRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid credentials"));
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtUtils.generateToken(user.getId(), user.getRole());
        return new AuthResponse(token);
    }
}
