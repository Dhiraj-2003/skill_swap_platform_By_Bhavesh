package com.odoo.project.com.odoo.project.Repo;


import com.odoo.project.com.odoo.project.Entity.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    List<Feedback> findByToUserId(Long userId);
}
