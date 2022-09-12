package com.cg.BankingApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cg.BankingApp.entity.Login;
import com.cg.BankingApp.entity.User;
import com.cg.BankingApp.service.LoginService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class LoginController {

	@Autowired
	LoginService logServ;
	
	@PostMapping("/login")
	public Login loginUser(@RequestBody User user) throws Exception
	{
		String userName = user.getUserName();
		String password = user.getPassword();
		if(userName != null && password != null)
		{
			Login login = logServ.verifyData(userName,password);
			return login;
		}
		else
		{
		return null;
		}
	}
	
	
//	@PostMapping("/login")
//	public Login loginUser1(@RequestBody User user) throws Exception {
//		String tempUsername=user.getUserName();
//		String tempPassword=user.getPassword();
//		String role =user.getRole();
//		System.out.println(tempUsername);
//		System.out.println(tempPassword);
//		Login login=new Login();
//		
//		if(tempUsername!=null && tempPassword!=null) {
//			System.out.println("exception try");
//			try {
//				System.out.println("I am in");
//				login=logServ.loginWithData(tempUsername,tempPassword);
//			} catch (Exception e) {
//				
//				return login;
//				
//
//			}
//		}
//		if (login==null)
//			throw new Exception("Bad Credential");
//		
//		return login;
//		
//	}

	/*
	@PostMapping("/login/{username}/{password}")
	public Login loginUser(@PathVariable String username, @PathVariable String password) {
		Login login=new Login();
		try {
			login=logServ.loginWithData(username, password);
		} catch (Exception e) {
			return login;

		}
		return login;
	}  
	 */

	@PostMapping("/Logout")
	public HttpStatus logOut() throws Exception {
		System.out.println("logout");
		if (this.loginStatus()) {
			logServ.logoutPresentUser();
			return HttpStatus.ACCEPTED;
		} else {
			throw new Exception("User Not yet Logged In");
		}
	}

	public boolean loginStatus() {
		return logServ.loginStatus();
	}

	public String getRole() {
		return logServ.getRole();
	}

}