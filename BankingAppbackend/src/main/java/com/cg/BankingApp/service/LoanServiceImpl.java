package com.cg.BankingApp.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.BankingApp.entity.Loan;
import com.cg.BankingApp.repository.ILoanRepository;


@Service
public class LoanServiceImpl implements ILoanService {

	@Autowired
	private ILoanRepository loanRepository;

	
	/*
	 * Method for adding booking object -POST
	 */

	@Override
	public Loan addLoan(Loan add) {
		return loanRepository.save(add);
	}

	@Override
	public Loan updateLoan(Loan add) {
		
		return loanRepository.save(add);
	}

	

	/*
	 * cancel booking
	 */
	@Override
	public Loan removeLoan(Loan add) {
		
		 loanRepository.delete(add);
		 return add;
	}

	

	/*
	 * view all bookings
	 */
	@Override
	public List<Loan> viewAllLoan() {
		
		return loanRepository.findAll();
	}

	
	
	/*
	 * view booking by booking id
	 */
	
	@Override
	public Optional<Loan> viewLoanById(long loanId) {
		// TODO Auto-generated method stub
		return loanRepository.findById(loanId);
	}

	@Override
	public Optional<Loan> viewLoanByCustomerId(long CusId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<Loan> viewLoanByDate(LocalDate date) {
		// TODO Auto-generated method stub
		return null;
	}

	

}