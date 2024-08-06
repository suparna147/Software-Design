package com.example.back.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.back.entity.Contact;
import com.example.back.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    // Save a new contact
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
    }

    // Get all contacts
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    // Get a contact by ID
    public Contact getContactById(Long id) {
        Optional<Contact> contact = contactRepository.findById(id);
        return contact.orElseThrow(() -> new RuntimeException("Contact not found with id: " + id));
    }

    // Update an existing contact
    public Contact updateContact(Long id, Contact contactDetails) {
        if (!contactRepository.existsById(id)) {
            throw new RuntimeException("Contact not found with id: " + id);
        }
        contactDetails.setId(id); // Ensure the ID is set for the update
        return contactRepository.save(contactDetails);
    }

    // Delete a contact
    public void deleteContact(Long id) {
        if (!contactRepository.existsById(id)) {
            throw new RuntimeException("Contact not found with id: " + id);
        }
        contactRepository.deleteById(id);
    }
}
