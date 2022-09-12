package com.cg.BankingApp.repository;

import java.util.List;
import javax.persistence.*;
import org.springframework.stereotype.Repository;

import com.cg.BankingApp.entity.Account;
import com.cg.BankingApp.entity.User;
import com.cg.BankingApp.exception.UserNotFoundException;


@Repository
public class QueryClass {
	@PersistenceContext
	EntityManager eManager;

	public List<Account> getAllByAccount(Account accountId) {
		TypedQuery<Account> qry = eManager
				.createQuery("select b from Account b join b.show s where s.account.accountId = :id", Account.class);
		qry.setParameter("id", accountId);
		return qry.getResultList();
	}

	public User findByUserName(String username) throws UserNotFoundException {
		TypedQuery<User> qry = eManager.createQuery("select u from User u where u.userName like :name", User.class);
		qry.setParameter("name", username);
		List<User> user = qry.getResultList();
		if (user.size() == 0)
			throw new UserNotFoundException("User Not Available !!");
		return user.get(0);
	}

}
