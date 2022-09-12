package com.cg.BankingApp.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "transaction")

public class Transaction {
	private long accountNo;
	private String status;
	private Date transactionDate;
	//private String transactionTime;
	public long accBal;
	private String TransactionType;
	public long credit;
	public long debit;
	public int transactionId;
	public Account account;
	
	public Transaction(long accountNo, String status, Date transactionDate, long accBal, String transactionType,
			long credit, long debit, int transactionId, Account account) {
		super();
		this.accountNo = accountNo;
		this.status = status;
		this.transactionDate = transactionDate;
		this.accBal = accBal;
		TransactionType = transactionType;
		this.credit = credit;
		this.debit = debit;
		this.transactionId = transactionId;
		this.account = account;
	}

	
	
	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
    @Column(name = "accountNo", length = 10)
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getAccountNo() {
		return accountNo;
	}
	
	@ManyToOne(cascade=CascadeType.MERGE)
    @JoinColumn(name="accountId")
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
	public long getCredit() {
		return credit;
	}
	public long getDebit() {
		return debit;
	}
	public void setAccountNo(long accountNo) {
		this.accountNo = accountNo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}
//
//	public String getTransactionTime() {
//		return transactionTime;
//	}
//
//	public void setTransactionTime(String transactionTime) {
//		this.transactionTime = transactionTime;
//	}
	


	public long getAccBal() {
		return accBal;
	}

	public void setAccBal(long accBal) {
		this.accBal = accBal;
	}

	public String getTransactionType() {
		return TransactionType;
	}

	public void setTransactionType(String TransactionType) {
		this.TransactionType = TransactionType;
	}

//	public long getCredit() {
//		return credit;
//	}

	public void setCredit(long credit) {
		this.credit = credit;
	}

//	public long getDebit() {
//		return debit;
//	}

	public void setDebit(long debit) {
		this.debit = debit;
	}

	public int getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}



	@Override
	public String toString() {
		return "Transaction [accountNo=" + accountNo + ", status=" + status + ", transactionDate=" + transactionDate
				+ ", accBal=" + accBal + ", TransactionType=" + TransactionType + ", credit=" + credit + ", debit="
				+ debit + ", transactionId=" + transactionId + ", account=" + account + "]";
	}
	
	

//	@ManyToMany (cascade=CascadeType.MERGE)
//    @JoinColumn(name="accountId")
//	public Account getAccount() {
//		return account;
//	}
	
	
	
}
