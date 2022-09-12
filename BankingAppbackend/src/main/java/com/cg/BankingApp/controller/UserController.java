package com.cg.BankingApp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.BankingApp.entity.Admin;
import com.cg.BankingApp.entity.User;
import com.cg.BankingApp.entity.Verify;
import com.cg.BankingApp.exception.AccessForbiddenException;
import com.cg.BankingApp.repository.IAdminRepository;
import com.cg.BankingApp.repository.ICustomerRepository;
import com.cg.BankingApp.service.IUserService;




@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	IUserService userService;
	@Autowired
	ICustomerRepository customerRepository;

	@Autowired
	IAdminRepository adminRepository;


	
	@GetMapping("/get/user/{userName}")
	public User getUserByName(@PathVariable (value = "userName") String userName)
	{
		return userService.getUserById(userName);
	}
	
//	@GetMapping("/get/username")
//	public User getUserByUserName(@RequestBody Verify user)
//	{
//		System.out.println("hiiii");
//		String userName=user.getUserName();
//		return userService.getUserById(userName);
//	}
	
	@PutMapping("/reset/password")
	public User resetPassword(@RequestBody User user) 
	{
		String userName =user.getUserName();
		String password = user.getPassword();
		return userService.resetPassword(userName, password);
	}
	
//	@PostMapping("/user/adduser")
//	public User addUser(@RequestBody User user)
//			throws AccessForbiddenException, CustomerNotFoundException, UserCreationError {
//		
//		if (user.getRole().equalsIgnoreCase("CUSTOMER")) {
//			Customer customer = new Customer(user.getUsername(), null, null, null, user.getPassword());
//			
//			customerRepository.saveAndFlush(customer);
//			user.setCustomer(customer);
//		}
//	
//		return userService.addUser(user);
//	}

	
	@DeleteMapping("/user/removeuser/{userName}")
	public User removeUser( @PathVariable (value = "userName") String userName) throws AccessForbiddenException {
//		@RequestBody
		
		User user = userService.getUserById(userName);
		userService.removeUser(user);
		return userService.removeUser(user);
		
	}
//	@GetMapping("/get/userid/{userid}")
//	public Optional<User> getById(@PathVariable (value = "userid") int userid)
//	{
//		return userService.getById(userid);
//	}
//	
	
//	@DeleteMapping("/user/removeuser/{userid}")
//	public User removeUserId( @PathVariable (value = "userid") int userid) throws AccessForbiddenException {
////		@RequestBody
//		
//		Optional<User> user = userService.getById(userid);
//		userService.r(user);
//		return userService.removeUserId(user);
		
	//}
}