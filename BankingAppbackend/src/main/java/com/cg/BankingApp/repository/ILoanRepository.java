package com.cg.BankingApp.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cg.BankingApp.entity.Loan;


@Repository
public interface ILoanRepository extends JpaRepository<Loan,Long> {

	//Optional<Loan> findById(Integer loanId);
	//public Optional<Loan> findByLoanId(Integer loanId);
//	public Optional<Loan> findByAccountId(String accountId);
	
}

