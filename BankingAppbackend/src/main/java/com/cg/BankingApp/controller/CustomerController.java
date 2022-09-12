package com.cg.BankingApp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.MethodArgumentNotValidException;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseStatus;
//import org.springframework.web.bind.annotation.RestController;



import org.springframework.beans.factory.annotation.Autowired;
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

import com.cg.BankingApp.entity.Customer;
import com.cg.BankingApp.exception.CustomerNotFoundException;
import com.cg.BankingApp.service.ICustomerService;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CustomerController {
	@Autowired
	private ICustomerService service;
//	@Autowired
//	private IAccountService accountService;
	
	@Autowired
 LoginController loginController;
	
	@PostMapping("/add")
	public Customer addCustomer(@Valid @RequestBody Customer customer) {
		return service.addCustomer(customer);
	}
//	//View All account from database
//			@GetMapping("/account/viewall")
//			public List <Account> ViewAllAccount()
//			{
//				return service.viewAll();
//			}
//	
	
//	@DeleteMapping("/remove/{customerId}")
//	public Customer removeCustomer(@PathVariable("customerId") Customer customer) throws CustomerNotFoundException{
//		return service.removeCustomer(customer);
//	}
	
	//Delete Account by using account ID
    @DeleteMapping("/removes/{customerId}")
    public Map<String,Boolean> removeCustomer(@PathVariable(value="customerId") int custId) throws CustomerNotFoundException
	{
		Customer customer = service.viewCustomer(custId).orElseThrow(()-> new CustomerNotFoundException("No Customer found with this id: "+custId));
		service.removeCustomer(customer);
	    Map<String,Boolean> response = new HashMap<>();
	    response.put("cust id "+custId+ " is Deleted", Boolean.TRUE);
	    return response;
	}
	
	
//	@PostMapping("/customer")
//	 public ResponseEntity<Customer> validateCustomer(@RequestBody Customer customer) throws CustomerNotFoundException {
//		Customer customer1=service.validateCustomer(customer);
//		return new ResponseEntity<Customer>(customer1,HttpStatus.OK);
//	}
	
	
	@GetMapping("/customer/signout")
	public String signOut(Customer customer) throws CustomerNotFoundException
	{
		return service.signOut(customer);
	}
	//Update customer in database
	@PutMapping("/customer/update/{custId}")
	public ResponseEntity <Customer> updateCustomerById(@PathVariable(value="custId") Integer custId, @RequestBody Customer updadd) throws CustomerNotFoundException
	{
		Customer add = service.viewCustomer(custId).orElseThrow(()-> new CustomerNotFoundException("No customer found with gives customerId:"+custId));
		add.setFirstName(updadd.getFirstName());
		add.setLastName(updadd.getLastName());
		add.setMobNo(updadd.getMobNo());
		add.setEmail(updadd.getEmail());
		
		
		Customer updatedCustomer = service.updateCustomer(add);
		return ResponseEntity.ok(updatedCustomer);	
			
	}
	
		
		

//View All customer from database
@GetMapping("/customer/viewall")
public List <Customer> ViewAllCustomer()
{
return service.viewAllCustomer();
}

//View Customer using customer ID
@GetMapping("/customer/view/{custId}")
public ResponseEntity <Customer> viewCustomer(@PathVariable(value = "custId")Integer custId ) throws CustomerNotFoundException
{
Customer add = service.viewCustomer(custId).orElseThrow(()-> new CustomerNotFoundException("No customer found with given customerId: "+custId));
return ResponseEntity.ok().body(add);		
}	
	
	
	
	 @ResponseStatus(HttpStatus.BAD_REQUEST)
	    @ExceptionHandler(MethodArgumentNotValidException.class)
	    public Map<String, String> handleMethodArgumentNotValid(MethodArgumentNotValidException ex) {
	        Map<String, String> errors = new HashMap<>();
	    
	        ex.getBindingResult().getFieldErrors().forEach(error ->
	            errors.put(error.getField(), error.getDefaultMessage()));
	        
	        return errors;
	    }
	
}

