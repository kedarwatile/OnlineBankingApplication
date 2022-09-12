package com.cg.BankingApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

	@Entity
	@Table(name="Customer")
public class Customer {
	private int custId;
	
	
	@NotEmpty(message="Please select valid firstName")
	private String  firstName;
	@NotEmpty(message="Please select valid lastName")
	private String  lastName;
	@NotEmpty(message="Please select valid email")
	private String  email;
	@NotEmpty(message="Password cannot be empty")
	private String password;
	@NotEmpty(message="Please select valid MobNo")
	private String MobNo;
	public Customer(int custId, @NotEmpty(message = "Please select valid firstName") String firstName,
			@NotEmpty(message = "Please select valid lastName") String lastName,
			@NotEmpty(message = "Please select valid email") String email,
			@NotEmpty(message = "Password cannot be empty") String password,
			@NotEmpty(message = "Please select valid mobNo")
			String mobNo) {
		super();
		this.custId = custId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.MobNo = mobNo;
	}
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Id
	@Column(name="custId",length=20)
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobNo() {
		return MobNo;
	}
	public void setMobNo(String mobNo) {
		this.MobNo = mobNo;
	}
	@Override
	public String toString() {
		return "Customer [custId=" + custId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", MobNo=" + MobNo + "]";
	}
	
	
	
}
	
