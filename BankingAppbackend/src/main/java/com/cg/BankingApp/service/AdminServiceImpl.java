package com.cg.BankingApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.BankingApp.entity.Admin;
import com.cg.BankingApp.entity.Admin;
import com.cg.BankingApp.entity.User;
import com.cg.BankingApp.exception.AdminNotFoundException;
import com.cg.BankingApp.repository.IAdminRepository;
import com.cg.BankingApp.repository.UserRepository;


@Service
public class AdminServiceImpl implements IAdminService {
	@Autowired
	IAdminRepository iAdminRepository;
	@Autowired
	UserRepository Userrepository;
	@Override
	public Admin addAdmin(Admin admin) {
//		// TODO Auto-generated method stub
//		return iAdminRepository.save(admin);
		
		Admin generateAdmin = iAdminRepository.save(admin);

		User user = new User();
		user.setUserName(admin.getEmail());
		user.setPassword(admin.getPassword());
		user.setAdmin(generateAdmin);
		user.setRole("Admin");
		Userrepository.save(user);
		return generateAdmin;
	}

	@Override
	public Admin removeAdmin(Admin admin) throws AdminNotFoundException {
		Optional<Admin>optional=iAdminRepository.findById(admin.getAdminId());
		if(optional.isEmpty()) {
			throw new AdminNotFoundException("Admin :"+admin.getAdminId()+"does not exist");
		}
		iAdminRepository.delete(optional.get());
		return optional.get();
	}

//	@Override
//	public Admin validateAdmin(Admin admin) throws AdminNotFoundException {
//	
//	Optional<Admin> optionalAdmin=iAdminRepository.findById(admin.getAdminId());
//	if(!optionalAdmin.isEmpty())
//	{
//		if(optionalAdmin.get().getPassword().equals(admin.getPassword()))
//		{
//			return admin;
//		}
//		else
//		{
//			throw new AdminNotFoundException("Wrong Password");
//		}
//	}
//	else
//	{
//		throw new AdminNotFoundException("Admin Not Found");
//	}
//	
//}

@Override
public String signOut(Admin dmin) throws AdminNotFoundException {
	return "Signout successful" ;
}

@Override
public Admin updateAdmin(Admin add) {
	return iAdminRepository.save(add) ;
}

@Override
public List<Admin> viewAllAdmin() {
	return iAdminRepository.findAll();

}

@Override
public Optional<Admin> viewAdmin(Integer adminId) {
	return iAdminRepository.findById(adminId);	
}


	
}
