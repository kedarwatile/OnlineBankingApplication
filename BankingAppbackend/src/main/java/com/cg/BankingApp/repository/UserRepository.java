package com.cg.BankingApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.BankingApp.entity.User;


public interface UserRepository extends JpaRepository<User,Integer> {

	public User findByuserName(String userName);
	public boolean existsByPassword(String password);
	public User getByUserName(String userName);
	
}
