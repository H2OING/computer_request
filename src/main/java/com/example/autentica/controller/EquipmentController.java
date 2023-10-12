package com.example.autentica.controller;

import com.example.autentica.entities.Equipment;
import com.example.autentica.entities.EquipmentType;
import com.example.autentica.repos.EquipmentRepository;
import com.example.autentica.services.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
public class EquipmentController {

    @Autowired
    private EquipmentService equipmentService;
    private final EquipmentRepository equipmentRepo;

    public EquipmentController(EquipmentRepository equipmentRepo) {
        this.equipmentRepo = equipmentRepo;
    }

    @GetMapping("/equipments")
    public List<Equipment> getEquipment(){
        return (List<Equipment>) equipmentRepo.findAll();
    }

    @PostMapping("/equipments")
    void addEquipment(@RequestBody Equipment equipment){
        System.out.println("Received POST request for equipment: " + equipment);
        equipmentRepo.save(equipment);
    }

    @DeleteMapping("/equipments/{id}")
    public ResponseEntity<?> deleteEquipment(@PathVariable Long id) {
        Equipment existingEquipment = equipmentRepo.findById(id).orElse(null);
        if (existingEquipment == null) {
            return ResponseEntity.notFound().build();
        }
        equipmentRepo.delete(existingEquipment);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/equipments/{id}")
    public ResponseEntity<?> updateEquipment(@PathVariable Long id, @RequestBody Equipment updatedEquipment) {
        Equipment existingEquipment = equipmentService.getEquipmentById(id);
        if (existingEquipment == null) {
            return ResponseEntity.notFound().build();
        }

        existingEquipment.setName(updatedEquipment.getName());
        existingEquipment.setDescription(updatedEquipment.getDescription());
        existingEquipment.setQuantity(updatedEquipment.getQuantity());
        existingEquipment.setEquipmentType(updatedEquipment.getEquipmentType());
        existingEquipment.setUpdated_at(new Date());

        equipmentService.save(existingEquipment);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/equipments/by-type/{type}")
    public List<Equipment> getEquipmentByType(@PathVariable EquipmentType type) {
        return equipmentService.getEquipmentByType(type);
    }

}
