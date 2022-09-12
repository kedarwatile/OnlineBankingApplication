package com.cg.BankingApp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.BankingApp.entity.Admin;
import com.cg.BankingApp.entity.Customer;
import com.cg.BankingApp.entity.User;
import com.cg.BankingApp.exception.UserCreationError;
import com.cg.BankingApp.repository.IAdminRepository;
import com.cg.BankingApp.repository.ICustomerRepository;
import com.cg.BankingApp.repository.QueryClass;
import com.cg.BankingApp.repository.UserRepository;
import com.cg.BankingApp.validator.InputValidator;



@Service
public class IUserServiceImpl implements IUserService {

	@Autowired
	UserRepository userRepository;
     @Autowired
     ICustomerRepository customerRepository;

     @Autowired
     IAdminRepository adminRepository;
	@Autowired
	InputValidator validate;
//	@Autowired
//	IUserService userService;

	@Autowired
	QueryClass qcp;

	@Override
	public User addUser(User user) throws UserCreationError {
		if (!validate.usernameValidator(user.getUserName()))
			throw new UserCreationError("Check Username !!!!");
		if (!validate.passwordValidator(user.getPassword()))
			throw new UserCreationError("Cannot register this User with this password");
		return userRepository.saveAndFlush(user);
	}

	@Override
	public User removeUser(User user) {
		
		userRepository.delete(user);
		
		
		return user;
	}
	
	public User getUserById(String userName)
	{
		return userRepository.findByuserName(userName);

//				userRepository.existsByUserName(userName);
	}
	
	public User resetPassword(String userName,String password)
	{
		
		User user=userRepository.getByUserName(userName);
		user.setPassword(password);
		if(user.getRole().equalsIgnoreCase("user"))
		{
		Customer customer =user.getCustomer();
		customer.setPassword(password);
		customerRepository.save(customer);
		}
		else
		{
			Admin admin =user.getAdmin();
			admin.setPassword(password);
			adminRepository.save(admin);
		}
		return userRepository.save(user);
		
	}

//	@Override
//	public Optional<User> getById(int userid) {
//		// TODO Auto-generated method stub
//		return userRepository.findById(userid);
//	}

	

}
