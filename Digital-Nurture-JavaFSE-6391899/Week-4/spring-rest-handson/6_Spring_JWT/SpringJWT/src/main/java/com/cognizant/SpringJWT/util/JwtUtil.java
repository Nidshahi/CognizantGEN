package com.cognizant.SpringJWT.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Date;
import java.util.Base64;

@Component
public class JwtUtil {

    private final String SECRET_KEY = "secretkey1234567890secretkey1234567890"; // at least 256-bit
    private final Key key = new SecretKeySpec(Base64.getDecoder().decode(Base64.getEncoder().encodeToString(SECRET_KEY.getBytes())),
            SignatureAlgorithm.HS256.getJcaName());

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 10)) // 10 minutes
                .signWith(key)
                .compact();
    }
}
