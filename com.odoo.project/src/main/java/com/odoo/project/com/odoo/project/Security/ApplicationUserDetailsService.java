package com.odoo.project.com.odoo.project.Security;


import com.odoo.project.com.odoo.project.Entity.User;

import com.odoo.project.com.odoo.project.Repo.userRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ApplicationUserDetailsService implements UserDetailsService {

    private final userRepository ur;

    @Override
    public ApplicationUserDetails loadUserByUsername(String email) {
        User user = ur.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new ApplicationUserDetails(user);
    }

    public ApplicationUserDetails loadUserById(Long id) {
        User user = ur.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found by id"));
        return new ApplicationUserDetails(user);
    }
}

