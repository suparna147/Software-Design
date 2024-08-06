package com.example.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.back.entity.Payment;
import com.example.back.repository.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    public Payment findById(Long id) {
        return paymentRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Payment not found with id: " + id));
    }

    public Payment updatePayment(Long id, Payment paymentDetails) {
        Payment existingPayment = paymentRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Payment not found with id: " + id));

        existingPayment.setFirstName(paymentDetails.getFirstName());
        existingPayment.setLastName(paymentDetails.getLastName());
        existingPayment.setEmail(paymentDetails.getEmail());
        existingPayment.setAddress(paymentDetails.getAddress());
        existingPayment.setAddress2(paymentDetails.getAddress2());
        existingPayment.setCountry(paymentDetails.getCountry());
        existingPayment.setState(paymentDetails.getState());
        existingPayment.setZip(paymentDetails.getZip());
        existingPayment.setCardName(paymentDetails.getCardName());
        existingPayment.setCardNumber(paymentDetails.getCardNumber());
        existingPayment.setExpirationDate(paymentDetails.getExpirationDate());
        existingPayment.setCvv(paymentDetails.getCvv());
        existingPayment.setAmount(paymentDetails.getAmount());

        return paymentRepository.save(existingPayment);
    }

    public void deletePayment(Long id) {
        if (!paymentRepository.existsById(id)) {
            throw new RuntimeException("Payment not found with id: " + id);
        }
        paymentRepository.deleteById(id);
    }
}
