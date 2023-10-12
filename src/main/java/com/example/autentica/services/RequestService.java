package com.example.autentica.services;

import com.example.autentica.entities.Request;
import com.example.autentica.repos.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

    public Request getRequestById(Long id) {
        Optional<Request> requestOptional = requestRepository.findById(id);
        return requestOptional.orElse(null);
    }

    public void save(Request existingRequest) {
        existingRequest.setStatus("ON HOLD");
        existingRequest.setCreated_at(new Date());
        requestRepository.save(existingRequest);
    }

    public void updateRequestStatus(Long requestId, String newStatus) {
        Optional<Request> requestOptional = requestRepository.findById(requestId);

        if (requestOptional.isPresent()) {
            Request request = requestOptional.get();
            request.setStatus(newStatus);
            requestRepository.save(request);
        } else {
            System.out.println("Request with ID " + requestId + " not found.");
        }
    }
}
