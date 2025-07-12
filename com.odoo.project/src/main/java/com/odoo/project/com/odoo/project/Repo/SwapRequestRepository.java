package com.odoo.project.com.odoo.project.Repo;

import com.odoo.project.com.odoo.project.Entity.SwapRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SwapRequestRepository extends JpaRepository<SwapRequest, Long> {     List<SwapRequest> findByReceiverId(Long userId); }
