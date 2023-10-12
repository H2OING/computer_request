package com.example.autentica.services;

import com.example.autentica.entities.Equipment;
import com.example.autentica.entities.EquipmentType;
import com.example.autentica.repos.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipmentService {

    @Autowired
    private EquipmentRepository equipmentRepository;

    public Equipment getEquipmentById(Long id) {
        Optional<Equipment> equipmentOptional = equipmentRepository.findById(id);
        return equipmentOptional.orElse(null);
    }

    public void save(Equipment existingEquipment) {
        equipmentRepository.save(existingEquipment);
    }

    public List<Equipment> getEquipmentByType(EquipmentType type) {
        return equipmentRepository.findAllByEquipmentType(type);
    }
}
