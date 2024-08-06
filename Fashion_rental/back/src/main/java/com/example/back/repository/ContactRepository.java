package com.example.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.back.entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
