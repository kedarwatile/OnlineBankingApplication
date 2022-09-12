package com.cg.BankingApp.service;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.cg.BankingApp.entity.Loan;
public interface ILoanService {
	public Loan addLoan(Loan add);
	public Loan updateLoan(Loan add);
	public Loan removeLoan(Loan add);
	public List<Loan> viewAllLoan();
	Optional<Loan> viewLoanById(long loanId);
	Optional<Loan> viewLoanByCustomerId(long CusId);
	Optional<Loan> viewLoanByDate(LocalDate date);
}