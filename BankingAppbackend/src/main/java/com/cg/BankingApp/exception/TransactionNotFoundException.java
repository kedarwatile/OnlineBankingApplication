package com.cg.BankingApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)

public class TransactionNotFoundException extends Exception  {
	

	private static final long serialVersionUID = 1L;

	public TransactionNotFoundException(String message)
	{
		super(message);
	}

}
