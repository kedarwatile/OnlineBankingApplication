package com.cg.BankingApp.entity;

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
import javax.validation.constraints.NotEmpty;

@Entity
@Table(name="Account")
public class Account {

	private int accountId;
	@NotEmpty(message = "Bank Name is required")
	private String bankName;
	@NotEmpty(message = "Branch Name is required")
	private String branch;
	//@NotEmpty(message = "IFSC Code is required")
	private String IFSC; 
	@NotEmpty(message = "City Name is required")
	private String  city;
	@NotEmpty(message = "State Name is required")
	private String state;
	@NotEmpty(message = "Country Name is required")
	private String country;	
	@NotEmpty(message = "Pin Code is required")
	private String pincode;
	
private String AccStatus;
	private Customer customer;
//	private Transaction transaction;
//	private Loan loan;
	private Admin admin;
	


	public Account(int accountId, @NotEmpty(message = "Bank Name is required") String bankName,
			@NotEmpty(message = "Branch Name is required") String branch,
			@NotEmpty(message = "IFSC Code is required") String iFSC,
			@NotEmpty(message = "City Name is required") String city,
			@NotEmpty(message = "State Name is required") String state,
			@NotEmpty(message = "Country Name is required") String country,
			@NotEmpty(message = "Pin Code is required") String pincode, String accStatus, Customer customer,
			 Admin admin) {
		super();
		this.accountId = accountId;
		this.bankName = bankName;
		this.branch = branch;
		IFSC = iFSC;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pincode = pincode;
		AccStatus = accStatus;
		this.customer = customer;
//		this.transaction = transaction;
//		this.loan = loan;
     	this.admin = admin;
	}


	

	public Account() {
		super();
		// TODO Auto-generated constructor stub
	}




	@Id
	@Column(name = "accountId", length = 10)
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int getAccountId() {
		return accountId;
	}


	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	@Column(name = "bankName", length = 20)
	public String getBankName() {
		return bankName;
	}


	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	@Column(name = "branch", length = 20)
	public String getBranch() {
		return branch;
	}


	public void setBranch(String branch) {
		this.branch = branch;
	}

	@Column(name = "IFSC", length = 20)
	public String getIFSC() {
		return IFSC;
	}


	public void setIFSC(String iFSC) {
		IFSC = iFSC;
	}

	@Column(name = "City", length = 20)
	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}

	@Column(name = "State", length = 20)
	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}

	@Column(name = "Country", length = 20)
	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}

	@Column(name = "Pincode", length = 20)
	public String getPincode() {
		return pincode;
	}


	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	@ManyToOne (cascade=CascadeType.MERGE)
    @JoinColumn(name="custId")
	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	
	
	
	@ManyToOne (cascade=CascadeType.MERGE)
    @JoinColumn(name="adminId")
	public Admin getAdmin() {
		return admin;
	}


	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

//
//	@ManyToMany(cascade=CascadeType.MERGE)
//	@JoinColumn(name="transactionId")
//	public Transaction getTransaction() {
//		return transaction;
//	}
//
//	public void setTransaction(Transaction transaction) {
//		this.transaction = transaction;
//	}
//	@ManyToMany(cascade=CascadeType.MERGE)
//	@JoinColumn(name="LoanId")
//	public Loan getLoan() {
//		return loan;
//	}

//	public void setLoan(Loan loan) {
//		this.loan = loan;
//	}
//	
	

	public String getAccStatus() {
		return AccStatus;
	}




	public void setAccStatus(String accStatus) {
		AccStatus = accStatus;
	}




	@Override
	public String toString() {
		return "Account [accountId=" + accountId + ", bankName=" + bankName + ", branch=" + branch + ", IFSC=" + IFSC
				+ ", city=" + city + ", state=" + state + ", country=" + country + ", pincode=" + pincode
				+ ", AccStatus=" + AccStatus + ", customer=" + customer + ", admin=" + admin + "]";
	}




	





	
	
	
	
	
}
