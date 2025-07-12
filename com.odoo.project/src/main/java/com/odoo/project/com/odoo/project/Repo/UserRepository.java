package com.odoo.project.com.odoo.project.Repo;

import com.odoo.project.com.odoo.project.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface userRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
