package com.cg.BankingApp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.BankingApp.entity.Account;
import com.cg.BankingApp.entity.Account;
import com.cg.BankingApp.exception.AccountNotFoundException;
import com.cg.BankingApp.exception.AccountNotFoundException;
import com.cg.BankingApp.service.IAccountService;




@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/api")
public class AccountController {
	@Autowired
	private IAccountService iaccountService;
	
	
	
	@PostMapping("/account/newaccount")
	public Account addAccount(@Valid @RequestBody Account account)
	{
		return iaccountService.addAccount(account);
	}
	
	//Update account in database
		@PutMapping("/account/update/{accountId}")
		public ResponseEntity <Account> updateAccountById(@PathVariable(value="accountId") Integer accountId, @RequestBody Account updadd) throws AccountNotFoundException
		{
			Account add = iaccountService.viewAccount(accountId).orElseThrow(()-> new AccountNotFoundException("No account found with gives accountId:"+accountId));
			add.setCity(updadd.getCity());
			add.setState(updadd.getState());
			add.setCountry(updadd.getCountry());
			add.setPincode(updadd.getPincode());
			
			Account updatedAccount = iaccountService.updateAccount(add);
			return ResponseEntity.ok(updatedAccount);	
				
		}
		
//		//Delete Account by using account ID
//		@DeleteMapping("/account/delete/{accountId}")
//		public ResponseEntity <Account> removeAccount(@PathVariable("accountId")Integer accountId) throws AccountNotFoundException
//		{
//			Account add = iaccountService.viewAccount(accountId).orElseThrow(()-> new AccountNotFoundException("Account not Found with this id: "+accountId));
//			
//			add.setAccStatus("Account Removed");
//			iaccountService.removeAccount(add);
//			
//			
//			return ResponseEntity.ok(add);		
//		}
		
		
		//Delete Account by using account ID
	    @DeleteMapping("/removeaccount/{accountId}")
	    public Map<String,Boolean> removeAccount(@PathVariable(value="accountId") int accountId) throws  AccountNotFoundException
		{
			Account account = iaccountService.viewAccount(accountId).orElseThrow(()-> new AccountNotFoundException("No Account found with this id: "+accountId));
			iaccountService.removeAccount(account);
		    Map<String,Boolean> response = new HashMap<>();
		    response.put("account id "+accountId+ " is Deleted", Boolean.TRUE);
		    return response;
		}
		//View All account from database
		@GetMapping("/account/viewall")
		public List <Account> ViewAllAccount()
		{
			return iaccountService.viewAllAccount();
		}
		
		//View Account using account ID
		@GetMapping("/account/view/{accountId}")
		public ResponseEntity <Account> viewAccount(@PathVariable(value = "accountId")Integer accountId ) throws AccountNotFoundException
		{
			Account add = iaccountService.viewAccount(accountId).orElseThrow(()-> new AccountNotFoundException("No account found with given accountId: "+accountId));
			return ResponseEntity.ok().body(add);		
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
