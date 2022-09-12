package com.cg.BankingApp.entity;

public class Login {

	private boolean loginStatus;
	private User user;
    private long id;
	public Login() {

	}

	public Login(boolean loginStatus, User user,long id) {
		super();
		this.loginStatus = loginStatus;
		this.user = user;
		this.id=id;
	}

	public boolean isLoginStatus() {
		return loginStatus;
	}

	public void setLoginStatus(boolean loginStatus) {
		this.loginStatus = loginStatus;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getRole() {
		return user.getRole();
	}
	
	public void setId(long id)
	{
		this.id=id;
	}
	public long getId()
	{
		return id;
	}
}
