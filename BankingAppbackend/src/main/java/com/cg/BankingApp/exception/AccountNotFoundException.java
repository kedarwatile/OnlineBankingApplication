package com.cg.BankingApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)

public class AccountNotFoundException extends Exception {

	
	
	private static final long serialVersionUID = 1L;

	public AccountNotFoundException(String message)
	{
		super(message);
	}
}
