package com.odoo.project.com.odoo.project.Controller;

import com.odoo.project.com.odoo.project.Entity.SwapRequest;
import com.odoo.project.com.odoo.project.Entity.User;
import com.odoo.project.com.odoo.project.Repo.swapRequestRepository;
import com.odoo.project.com.odoo.project.Repo.userRepository;
import com.odoo.project.com.odoo.project.Security.ApplicationUserDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/swap")
@RequiredArgsConstructor
public class SwapRequestController {

    private final swapRequestRepository swapRepo;
    private final userRepository userRepo;

    // Send a swap request
    @PostMapping("/request")
    public ResponseEntity<?> requestSwap(@AuthenticationPrincipal Jwt jwt, @RequestBody SwapRequest swap) {
        Long senderId = Long.valueOf(jwt.getSubject());
        Optional<User> sender = userRepo.findById(senderId);
        Optional<User> receiver = userRepo.findById(swap.getReceiver().getId());

        if (sender.isPresent() && receiver.isPresent()) {
            swap.setSender(sender.get());
            swap.setReceiver(receiver.get());
            swap.setStatus("PENDING");
            return ResponseEntity.ok(swapRepo.save(swap));
        }
        return ResponseEntity.badRequest().build();
    }

    // Accept or Reject a swap
    @PostMapping("/respond/{id}")
    public ResponseEntity<?> respondToSwap(@PathVariable Long id, @RequestParam String action, @AuthenticationPrincipal Jwt jwt) {
        Long receiverId = Long.valueOf(jwt.getSubject());

        return swapRepo.findById(id).map(swap -> {
            if (!swap.getReceiver().getId().equals(receiverId)) return ResponseEntity.status(403).build();

            if ("accept".equalsIgnoreCase(action)) swap.setStatus("ACCEPTED");
            else if ("reject".equalsIgnoreCase(action)) swap.setStatus("REJECTED");
            else return ResponseEntity.badRequest().body("Invalid action");

            return ResponseEntity.ok(swapRepo.save(swap));
        }).orElse(ResponseEntity.notFound().build());
    }

    // Delete a swap (only sender can delete)
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSwap(@PathVariable Long id, @AuthenticationPrincipal Jwt jwt) {
        Long userId = Long.valueOf(jwt.getSubject());

        return swapRepo.findById(id).map(swap -> {
            if (!swap.getSender().getId().equals(userId)) return ResponseEntity.status(403).build();

            swapRepo.delete(swap);
            return ResponseEntity.ok("Swap request deleted.");
        }).orElse(ResponseEntity.notFound().build());
    }

    // View received or sent swaps
    @GetMapping("/my")
    public List<SwapRequest> mySwaps(@AuthenticationPrincipal Jwt jwt) {
        Long userId = Long.valueOf(jwt.getSubject());
        return swapRepo.findByReceiverId(userId, userId);


    }

    @GetMapping("/notifications")
    public List<SwapRequest> getNewSwapRequests(@AuthenticationPrincipal ApplicationUserDetails userDetails) {
        return swapRepo.findByReceiverIdAndStatus(userDetails.getId(), "PENDING");
    }

}

