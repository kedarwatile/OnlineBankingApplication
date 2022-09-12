package com.cg.BankingApp.service;

import java.util.List;
import java.util.Optional;

import com.cg.BankingApp.entity.Account;


public interface IAccountService {
	public Account addAccount(Account add);
	public Account removeAccount(Account add);
	public Account updateAccount(Account add);
	public List<Account> viewAllAccount();
	public Optional<Account> viewAccount(Integer accountId);

}
