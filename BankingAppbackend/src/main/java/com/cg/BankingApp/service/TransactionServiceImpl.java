package com.cg.BankingApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.BankingApp.entity.Transaction;
import com.cg.BankingApp.repository.ITransactionRepository;


@Service
public class TransactionServiceImpl implements ITransactionService {
@Autowired
private ITransactionRepository iTransactionRepository;

	@Override
	public Transaction addTransaction(Transaction trans) {
		// TODO Auto-generated method stub
		return iTransactionRepository.save(trans);
	}

	@Override
	public Transaction updateTransaction(Transaction trans) {
		// TODO Auto-generated method stub
		return iTransactionRepository.save(trans);
	}

	@Override
	public List<Transaction> viewAllTransaction() {
		// TODO Auto-generated method stub
		return iTransactionRepository.findAll();
	}

	@Override
	public Optional<Transaction> viewTransaction(Long TransactionId) {
		// TODO Auto-generated method stub
		return iTransactionRepository.findById(TransactionId);
	}

	
}
