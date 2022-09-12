package com.cg.BankingApp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//public class UserNotFoundException {
@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class CustomerNotFoundException extends Exception {
	private static final long serialVersionUID = 1L;

	
	public CustomerNotFoundException(String message) {
		super(message);
	}
	

}
