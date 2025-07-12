package com.odoo.project.com.odoo.project.Controller;

import com.odoo.project.com.odoo.project.DTO.AuthRequest;
import com.odoo.project.com.odoo.project.DTO.AuthResponse;
import com.odoo.project.com.odoo.project.DTO.RegisterRequest;
import com.odoo.project.com.odoo.project.Service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }
}

