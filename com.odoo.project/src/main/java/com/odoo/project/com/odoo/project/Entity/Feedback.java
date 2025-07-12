package com.odoo.project.com.odoo.project.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity

public class Feedback {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private SwapRequest swap;

    private Long fromUserId;
    private Long toUserId;
    private int rating;
    private String message;
}

