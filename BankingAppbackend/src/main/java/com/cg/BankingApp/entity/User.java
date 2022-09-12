package com.cg.BankingApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonIgnore;




@Entity
@Table(name="user_table")
@DynamicUpdate
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userid;
//	@Id
	@Column(length=40)
	private String userName;
	@Column(length=30)
	private String password;
	@JsonIgnore
	@OneToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="custId")
	private Customer customer;
	
	@Column(length=10)
	private String role;
	
	@OneToOne
	@JoinColumn(name="adminId")
	private Admin admin;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int userid, String userName, String password, Customer customer, String role,
			Admin admin) {
		super();
		this.userid = userid;
		this.userName = userName;
		this.password = password;
		this.customer = customer;
		this.role = role;
		this.admin = admin;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	@Override
	public String toString() {
		return "User [userid=" + userid + ", userName=" + userName + ", password=" + password + ", customer=" + customer
				+ ", role=" + role + ", admin=" + admin + "]";
	}

		
	
	
}
