package com.cg.BankingApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.BankingApp.entity.Transaction;



public interface ITransactionRepository extends JpaRepository<Transaction,Long> {

}
