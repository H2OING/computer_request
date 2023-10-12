package com.example.autentica.entities;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.util.Date;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Equipment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEq;

    private String name;

    private String description;

    private int quantity;

    @Enumerated(EnumType.STRING)
    private EquipmentType equipmentType;

    @CreatedDate
    private Date created_at;

    @LastModifiedDate
    private Date updated_at;

    public Equipment(String name, String desc, int quantity, EquipmentType equipmentType) {
        this.name = name;
        this.description = desc;
        this.quantity = quantity;
        this.updated_at = new Date();
        this.created_at = new Date();
        this.equipmentType = equipmentType;
    }

}
