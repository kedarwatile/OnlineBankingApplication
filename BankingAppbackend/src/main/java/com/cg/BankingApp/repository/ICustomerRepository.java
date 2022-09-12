package com.cg.BankingApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.BankingApp.entity.Customer;


@Repository

public interface ICustomerRepository extends JpaRepository<Customer,Integer> {

}
