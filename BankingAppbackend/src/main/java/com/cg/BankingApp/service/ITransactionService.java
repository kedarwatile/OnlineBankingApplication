package com.cg.BankingApp.service;

import java.util.List;
import java.util.Optional;

import com.cg.BankingApp.entity.Transaction;



public interface ITransactionService {
public Transaction addTransaction(Transaction trans);
public Transaction updateTransaction(Transaction trans);
public List<Transaction> viewAllTransaction();
public Optional<Transaction> viewTransaction(Long TransactionId);
}
