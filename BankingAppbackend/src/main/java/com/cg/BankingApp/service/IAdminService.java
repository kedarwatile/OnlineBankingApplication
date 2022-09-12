package com.cg.BankingApp.service;

import java.util.List;
import java.util.Optional;

import com.cg.BankingApp.entity.Admin;
import com.cg.BankingApp.exception.AdminNotFoundException;

public interface IAdminService {

	
	public Admin addAdmin(Admin admin);
	public Admin removeAdmin(Admin admin)throws AdminNotFoundException;
//	public Admin validateAdmin(Admin admin) throws AdminNotFoundException;
	public String signOut(Admin admin)throws AdminNotFoundException;
	public Admin updateAdmin(Admin add);
	public List<Admin> viewAllAdmin();
	public Optional<Admin> viewAdmin(Integer adminId);

}
