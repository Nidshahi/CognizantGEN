package com.cognizant.SpringJWT.controller;

import com.cognizant.SpringJWT.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Base64;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] decoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(decoded);
            String[] parts = credentials.split(":", 2);

            String username = parts[0];
            String password = parts[1];

            // Validate credentials (from in-memory setup)
            if (("user".equals(username) || "admin".equals(username)) && "pwd".equals(password)) {
                String token = jwtUtil.generateToken(username);
                return ResponseEntity.ok("{\"token\":\"" + token + "\"}");
            }
        }

        return ResponseEntity.status(401).body("{\"error\": \"Invalid Credentials\"}");
    }
}
