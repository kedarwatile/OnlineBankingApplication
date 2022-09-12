package com.cg.BankingApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.BankingApp.entity.Account;
import com.cg.BankingApp.repository.IAccountRepository;

//import org.springframework.beans.factory.annotation.Autowired;


@Service
public class AccountServiceImpl implements IAccountService{

	@Autowired
	private IAccountRepository iaccountRepository;
	@Override
	public Account addAccount(Account add) {
		return iaccountRepository.save(add);
	}

	@Override
	public Account updateAccount(Account add) {
		return iaccountRepository.save(add) ;
	}

	@Override
	public Account removeAccount(Account add) {
		iaccountRepository.delete(add);
		return add;
	}

	@Override
	public List<Account> viewAllAccount() {
		return iaccountRepository.findAll();
	
	}

	@Override
	public Optional<Account> viewAccount(Integer accountId) {
		return iaccountRepository.findById(accountId);	
	}

	
	
}