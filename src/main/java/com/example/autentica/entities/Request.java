package com.example.autentica.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idReq;

    private String reason;

    @CreatedDate
    private Date created_at;

    @LastModifiedDate
    private Date updated_at;

    private String status;

    private int amount;

    private String equipment;

    public Request(String reason, Date created_at, Date updated_at, String status, int amount, String equipment) {
        this.reason = reason;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.status = status;
        this.amount = amount;
        this.equipment = equipment;
    }
}
