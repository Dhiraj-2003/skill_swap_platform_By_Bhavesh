package com.odoo.project.com.odoo.project.Controller;

import com.odoo.project.com.odoo.project.Entity.Feedback;
import com.odoo.project.com.odoo.project.Repo.feedbackRepository;
import com.odoo.project.com.odoo.project.Repo.swapRequestRepository;
import com.odoo.project.com.odoo.project.Security.ApplicationUserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/feedback")
@RequiredArgsConstructor
public class FeedbackController {

    private final feedbackRepository feedbackRepo;
    private final swapRequestRepository swapRepo;

    @PostMapping
    public ResponseEntity<?> submitFeedback(@AuthenticationPrincipal Jwt jwt, @RequestBody Feedback feedback) {
        Long fromUserId = Long.valueOf(jwt.getSubject());

        return swapRepo.findById(feedback.getSwap().getId()).map(swap -> {
            feedback.setFromUserId(fromUserId);
            feedback.setToUserId(swap.getReceiver().getId().equals(fromUserId) ? swap.getSender().getId() : swap.getReceiver().getId());
            feedback.setSwap(swap);
            return ResponseEntity.ok(feedbackRepo.save(feedback));
        }).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/received")
    public List<Feedback> feedbackReceived(@AuthenticationPrincipal Jwt jwt) {
        Long userId = Long.valueOf(jwt.getSubject());
        return feedbackRepo.findByToUserId(userId);
    }



    @GetMapping("/feedback/export")
    public ResponseEntity<Resource> downloadFeedbackReport(@AuthenticationPrincipal ApplicationUserDetails userDetails) throws IOException {
        List<Feedback> feedbacks = feedbackRepo.findByToUserId(userDetails.getId());

        String csv = "From,Rating,Message\n" + feedbacks.stream()
                .map(f -> f.getFromUserId() + "," + f.getRating() + "," + f.getMessage().replace(",", " "))
                .collect(Collectors.joining("\n"));

        ByteArrayResource resource = new ByteArrayResource(csv.getBytes());

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=feedback.csv")
                .contentType(MediaType.TEXT_PLAIN)
                .body(resource);
    }

}

