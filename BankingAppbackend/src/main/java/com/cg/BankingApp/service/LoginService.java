package com.cg.BankingApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.BankingApp.entity.Admin;
import com.cg.BankingApp.entity.Customer;
import com.cg.BankingApp.entity.Login;
import com.cg.BankingApp.entity.User;
import com.cg.BankingApp.repository.IAdminRepository;
import com.cg.BankingApp.repository.QueryClass;
import com.cg.BankingApp.repository.UserRepository;


@Service
public class LoginService {
	@Autowired
	private QueryClass qcp;

	@Autowired
	 IAdminRepository adminRepository;
	@Autowired
	private UserRepository userRepository;
	private Login logData = new Login();
	
	
	
	public Login verifyData(String userName,String password) throws Exception
	{
		Login login = new Login();
		User user =userRepository.getByUserName(userName);
		if(user==null)
		{
			return null;
		}
		String role =user.getRole();
		if(user != null && user.getPassword().equals(password))
		{
			if(role.equalsIgnoreCase("user"))
			{
				Customer customer =user.getCustomer();
				login.setId(customer.getCustId());
				login.setUser(user);
				login.setLoginStatus(true);
			}
			else
			{
				Admin admin = user.getAdmin();
				login.setId(admin.getAdminId());
				login.setUser(user);
				login.setLoginStatus(true);
				
			}
			return login;
		}
		else
		{
			return null;
		}
	}

	public Login loginWithData(String username, String password) throws Exception {
		System.out.println("hello");
		User user = qcp.findByUserName(username);
		String role =user.getRole();
		if(role.equalsIgnoreCase("user"))
		{
		
		Customer customer =user.getCustomer();
		System.out.println(customer.getCustId());
		if (!user.getPassword().equals(password)) {
			throw new Exception("Login Data Invalid");}
		logData.setLoginStatus(true);
		logData.setUser(user);
		logData.setId(customer.getCustId());
		}
		else
		{
			
			Admin admin =user.getAdmin();
			System.out.println(admin.getAdminId());
			if (!user.getPassword().equals(password)) {
				throw new Exception("Login Data Invalid");}
			logData.setLoginStatus(true);
			logData.setUser(user);
			logData.setId(admin.getAdminId());
		}
		return logData;
	}

	public Login logoutPresentUser() {
		if (logData.isLoginStatus()) {
			logData.setLoginStatus(false);
		}
		return logData;
	}

	public boolean loginStatus() {
		return logData.isLoginStatus();
	}

	public String getRole() {
		return logData.getRole();
	}

}
