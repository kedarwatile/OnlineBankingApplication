package com.cg.BankingApp.service;

import java.util.Optional;

import com.cg.BankingApp.entity.User;
import com.cg.BankingApp.exception.UserCreationError;

public interface IUserService {

	public User addUser(User user) throws UserCreationError;

	public User removeUser(User user);
	
	public User getUserById(String userId);
	public User resetPassword(String userId,String password);
//	public Optional<User> getById(int userid);

//	public void removeUserId(Optional<User> user);
}
