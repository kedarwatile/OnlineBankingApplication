package com.cg.BankingApp.entity;

public class Verify {

	private String userName;
	private String password;
	public Verify() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Verify(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
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
	@Override
	public String toString() {
		return "Verify [userName=" + userName + ", password=" + password + "]";
	}
	
	
}
