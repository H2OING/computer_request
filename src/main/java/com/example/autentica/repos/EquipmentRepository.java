package com.example.autentica.repos;

import com.example.autentica.entities.Equipment;
import com.example.autentica.entities.EquipmentType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EquipmentRepository extends JpaRepository<Equipment, Long> {

    List<Equipment> findAllByEquipmentType(EquipmentType type);
}
