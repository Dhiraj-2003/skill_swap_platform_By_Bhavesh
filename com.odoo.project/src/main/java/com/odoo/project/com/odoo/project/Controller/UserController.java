package com.odoo.project.com.odoo.project.Controller;

import com.odoo.project.com.odoo.project.Entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/profile")
@RequiredArgsConstructor
public class UserController {

    private final userRepository userRepository;
    private final swapRequestRepository swapRequestRepository;
    private final feedbackRepository feedbackRepository;

    // ✅ Get logged-in user's profile
    @GetMapping
    public ResponseEntity<User> getProfile(@AuthenticationPrincipal ApplicationUserDetails userDetails) {
        Long userId = userDetails.getId();
        return ResponseEntity.of(userRepository.findById(userId));
    }

    // ✅ Update profile
    @PutMapping
    public ResponseEntity<?> updateProfile(@AuthenticationPrincipal ApplicationUserDetails userDetails, @RequestBody User updated) {
        Long userId = userDetails.getId();
        return userRepository.findById(userId).map(user -> {
            user.setName(updated.getName());
            user.setLocation(updated.getLocation());
            user.setPhotoUrl(updated.getPhotoUrl());
            user.setAvailability(updated.getAvailability());
            user.setIsPublic(updated.getIsPublic());
            user.setSkillsOffered(updated.getSkillsOffered());
            user.setSkillsWanted(updated.getSkillsWanted());
            userRepository.save(user);
            return ResponseEntity.ok(user);
        }).orElse(ResponseEntity.notFound().build());
    }

    // ✅ Search public users by skill
    @GetMapping("/search")
    public List<User> searchUsersBySkill(@RequestParam String skill) {
        return userRepository.findAll().stream()
                .filter(u -> Boolean.TRUE.equals(u.getIsPublic()) &&
                        (u.getSkillsOffered().contains(skill) || u.getSkillsWanted().contains(skill)))
                .collect(Collectors.toList());
    }

    // ✅ Admin-only: Platform Stats
    @GetMapping("/admin/stats")
    @PreAuthorize("hasRole('ADMIN')")
    public Map<String, Object> getPlatformStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalUsers", userRepository.count());
        stats.put("totalSwaps", swapRequestRepository.count());
        stats.put("totalFeedbacks", feedbackRepository.count());
        return stats;
    }

    // ✅ Admin-only: Ban User
    @PostMapping("/admin/ban/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> banUser(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            user.get().setIsBanned(true);
            userRepository.save(user.get());
            return ResponseEntity.ok("User banned");
        }
        return ResponseEntity.notFound().build();
    }
}
