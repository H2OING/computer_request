package com.example.autentica.controller;

import com.example.autentica.entities.Request;
import com.example.autentica.repos.RequestRepository;
import com.example.autentica.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
public class RequestController {

    @Autowired
    private RequestService requestService;

    private final RequestRepository requestRepo;

    public RequestController(RequestRepository requestRepo){
        this.requestRepo = requestRepo;
    }

    @GetMapping("/requests")
    public List<Request> getRequest(){
        return requestRepo.findAll();
    }

    @PostMapping("/requests")
    void addRequest(@RequestBody Request request){
        request.setCreated_at(new Date());
        request.setStatus("ON HOLD");
        requestRepo.save(request);
    }

    @DeleteMapping("/requests/{id}")
    public ResponseEntity<?> deleteRequest(@PathVariable Long id) {
        Request existingRequest = requestRepo.findById(id).orElse(null);
        if (existingRequest == null) {
            return ResponseEntity.notFound().build();
        }
        requestRepo.delete(existingRequest);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/requests/{id}")
    public ResponseEntity<?> updateRequest(@PathVariable Long id, @RequestBody Request updatedRequest) {
        Request existingRequest = requestService.getRequestById(id);
        if (existingRequest == null) {
            return ResponseEntity.notFound().build();
        }

        existingRequest.setReason(updatedRequest.getReason());
        existingRequest.setStatus(updatedRequest.getStatus());
        existingRequest.setUpdated_at(new Date());

        requestService.save(existingRequest);

        return ResponseEntity.ok().build();
    }
    @PutMapping("/requests/{requestId}/status")
    public ResponseEntity<?> updateRequestStatus(@PathVariable Long requestId,@RequestBody Map<String, String> statusUpdate) {

        String newStatus = statusUpdate.get("status");

        if ("ACCEPTED".equals(newStatus) || "DECLINED".equals(newStatus)) {
            requestService.updateRequestStatus(requestId, newStatus);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
}
