package com.cg.BankingApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.BankingApp.entity.Account;



@Repository
public interface IAccountRepository extends JpaRepository<Account,Integer> {

//	public List<Account> findBybranch(String branch);
	public List<Account> findByCity(String city);
}
