package com.odoo.project.com.odoo.project.DTO;

import lombok.Data;
import java.util.List;

@Data
public class RegisterRequest {
    private String name;
    private String email;
    private String password;
    private String location;
    private String availability;
    private String photoUrl;
    private boolean isPublic;
    private List<String> skillsOffered;
    private List<String> skillsWanted;
}

