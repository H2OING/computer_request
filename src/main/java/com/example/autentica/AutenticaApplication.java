package com.example.autentica;

import com.example.autentica.entities.Equipment;
import com.example.autentica.entities.EquipmentType;
import com.example.autentica.entities.Request;
import com.example.autentica.repos.EquipmentRepository;
import com.example.autentica.repos.RequestRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class AutenticaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AutenticaApplication.class, args);
	}

}
