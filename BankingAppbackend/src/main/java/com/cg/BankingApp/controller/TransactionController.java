package com.cg.BankingApp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.BankingApp.entity.Transaction;
import com.cg.BankingApp.exception.TransactionNotFoundException;
import com.cg.BankingApp.service.ITransactionService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class TransactionController {
	@Autowired
	private ITransactionService iTransactionService; 
	
	@PostMapping("/transaction/newtransaction")
	public Transaction addTransaction(@Valid @RequestBody Transaction trans)
	{
		return iTransactionService.addTransaction(trans);
	}
	
	@PutMapping("/transaction/update/{transactionId}")
	public ResponseEntity <Transaction> updateTransactionById(@PathVariable(value="transactionId") Long transactionId, @RequestBody Transaction updtrans) throws TransactionNotFoundException
	{
		Transaction trans = iTransactionService.viewTransaction(transactionId).orElseThrow(()-> new TransactionNotFoundException("No transaction found with gives transactionId:"+transactionId));
		
//	       trans.setFareAmount(updtrans.getFareAmount());
//             trans.setTname(updtrans.getTname());
		trans.setAccBal(updtrans.getAccBal());
		trans.setStatus(updtrans.getStatus());
		
		Transaction updatedTransaction = iTransactionService.updateTransaction(trans);
		return ResponseEntity.ok(updatedTransaction);
	}
	
	//View All account from database
			@GetMapping("/transaction/viewall")
			public List <Transaction> ViewAllTransaction()
			{
				return iTransactionService.viewAllTransaction();
			}
			
			//View Transaction using account ID
			@GetMapping("/transaction/view/{transactionId}")
			public ResponseEntity <Transaction> viewTransaction(@PathVariable(value = "transactionId")Long transactionId ) throws TransactionNotFoundException
			{
				Transaction trans = iTransactionService.viewTransaction(transactionId).orElseThrow(()-> new TransactionNotFoundException("No transaction found with given transactionId: "+transactionId));
				return ResponseEntity.ok().body(trans);		
			}
			
			
			
			
			
			
			@PutMapping("/transaction/credit/{accountNo}")
			public ResponseEntity <Transaction> updateTransactionBycredit(@PathVariable(value="accountNo") Long accountNo, @RequestBody Transaction updtrans) throws TransactionNotFoundException
			{
				Transaction trans = iTransactionService.viewTransaction(accountNo).orElseThrow(()-> new TransactionNotFoundException("No transaction found with gives AccountNo:"+accountNo));
				trans.setCredit(updtrans.credit);
				trans.setTransactionDate(updtrans.getTransactionDate());
				if(trans.credit>0) {
						
				
		             trans.setAccBal(trans.accBal+trans.credit);
		             trans.setTransactionId(trans.transactionId+1);
		             trans.setTransactionType("CREDIT");    //(updtrans.getTransactionType())
		             trans.setStatus("Transaction Successful");
				}
				else {
					//System.out.println("False");
					
					trans.setCredit(0);
					trans.setStatus("Transaction failed due to Invalid amount");
				}
				
				Transaction updatedTransaction = iTransactionService.updateTransaction(trans);
				return ResponseEntity.ok(updatedTransaction);
			}			
		
			
			@PutMapping("/transaction/debit/{accountNo}")
			public ResponseEntity <Transaction> updateTransactionBydebit(@PathVariable(value="accountNo") Long accountNo, @RequestBody Transaction updtrans) throws TransactionNotFoundException
			{
				Transaction trans = iTransactionService.viewTransaction(accountNo).orElseThrow(()-> new TransactionNotFoundException("No transaction found with gives AccountNo:"+accountNo));
				trans.setDebit(updtrans.debit);
				trans.setTransactionDate(updtrans.getTransactionDate());
				if(trans.accBal>trans.debit) {
					
				
		             trans.setAccBal(trans.accBal-trans.debit);
		             trans.setTransactionId(trans.transactionId+1);
		             trans.setTransactionType("DEBIT");
		             trans.setStatus("Transaction Successful");
				
			}			
				
				else {
					//System.out.println("False");
					
					trans.setDebit(0);
					trans.setStatus("Transaction failed due to Insufficient Balance");
				}
				

					Transaction updatedTransaction = iTransactionService.updateTransaction(trans);
					
					return ResponseEntity.ok(updatedTransaction);
				
				
			}
		
			
			
			//Display messages assigned as per Validation Constraints
			@ResponseStatus(HttpStatus.BAD_REQUEST)
			@ExceptionHandler(MethodArgumentNotValidException.class)
			public Map<String, String> handleMethodArgumentNotValid(MethodArgumentNotValidException ex)
			{
				Map<String, String> errors = new HashMap<>();
				
				ex.getBindingResult().getFieldErrors().forEach(error ->
		        errors.put(error.getField(), error.getDefaultMessage()));
		    
		    return errors;
	
}
}
