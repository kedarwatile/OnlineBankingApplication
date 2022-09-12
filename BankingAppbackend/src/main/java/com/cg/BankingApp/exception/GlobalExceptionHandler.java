package com.cg.BankingApp.exception;
import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;



@ControllerAdvice
public class GlobalExceptionHandler {

	
	
	//In case user is not found
	@ExceptionHandler(CustomerNotFoundException.class)
	 public ResponseEntity<?> CustomerNotFoundException(CustomerNotFoundException ex, WebRequest request) {
        ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
   }
  
	
	//In case user is not found
		@ExceptionHandler(AdminNotFoundException.class)
		 public ResponseEntity<?> AdminNotFoundException(AdminNotFoundException ex, WebRequest request) {
	        ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
	        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	   }

   
 //In case account is not found
 		@ExceptionHandler(AccountNotFoundException.class)
 		 public ResponseEntity<?> AccountNotFoundException(AccountNotFoundException ex, WebRequest request) {
 	        ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
 	        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
 	   }
	
 		
 		//In case any other exception occurs
 	   @ExceptionHandler(Exception.class)
 	   public ResponseEntity<?> globalExcpetionHandler(Exception ex, WebRequest request) {
 	       ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
	       return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
	   }
}
