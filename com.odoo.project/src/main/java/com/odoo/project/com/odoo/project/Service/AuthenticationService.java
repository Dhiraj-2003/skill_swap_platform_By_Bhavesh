package com.odoo.project.com.odoo.project.Service;

import com.odoo.project.com.odoo.project.DTO.AuthRequest;
import com.odoo.project.com.odoo.project.DTO.AuthResponse;
import com.odoo.project.com.odoo.project.Repo.userRepository;
import com.odoo.project.com.odoo.project.DTO.RegisterRequest;
import com.odoo.project.com.odoo.project.Entity.User;
import com.odoo.project.com.odoo.project.Security.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    @Autowired
    private userRepository userRepository;

    private final PasswordEncoder passwordEncoder;
    @Autowired
    private final JwtUtils jwtUtils;

    public AuthResponse register(RegisterRequest req) {
        User user1 = new User();
        user1.setName(req.getName());
        user1.setEmail(req.getEmail());
        user1.setPassword(passwordEncoder.encode(req.getPassword()));
        user1.setRole("USER");
        user1.setLocation(req.getLocation());
        user1.setAvailability(req.getAvailability());
        user1.setPhotoUrl(req.getPhotoUrl());
        user1.setIsPublic(req.isPublic());
        user1.setSkillsOffered(req.getSkillsOffered());
        user1.setSkillsWanted(req.getSkillsWanted());
        userRepository.save(user1);

        String token = jwtUtils.generateToken(user1.getId(), user1.getRole());
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
