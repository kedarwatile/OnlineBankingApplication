package com.cg.BankingApp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.BankingApp.entity.Customer;
import com.cg.BankingApp.entity.User;
import com.cg.BankingApp.exception.CustomerNotFoundException;
import com.cg.BankingApp.repository.ICustomerRepository;
import com.cg.BankingApp.repository.UserRepository;


//public class CustomerServiceImpl {
@Service
public class CustomerServiceImpl implements ICustomerService{
	@Autowired
	private ICustomerRepository repository;
@Autowired
 private UserRepository Userrepository;
	@Override
	public Customer addCustomer(Customer customer)  {
		
		//return repository.save(customer);
	
		Customer generateCustomer = repository.save(customer);

		User user = new User();
		user.setUserName(customer.getEmail());
		user.setPassword(customer.getPassword());
		user.setCustomer(generateCustomer);
		user.setRole("User");
		Userrepository.save(user);
		return generateCustomer;

	
	}
	

    @Override
	public Customer removeCustomer(Customer customer) throws CustomerNotFoundException {
		Optional<Customer>optional=repository.findById(customer.getCustId());
		if(optional.isEmpty()) {
			throw new CustomerNotFoundException("Customer :"+customer.getCustId()+"does not exist");
		}
		repository.delete(optional.get());
		return optional.get();
	} 

//	@Override
//	public Customer validateCustomer(Customer customer) throws CustomerNotFoundException {
//		Optional<Customer> optionalCustomer=repository.findById(customer.getCustId());
//		if(!optionalCustomer.isEmpty())
//		{
//			if(optionalCustomer.get().getPassword().equals(customer.getPassword()))
//			{
//				return customer;
//			}
//			else
//			{
//				throw new CustomerNotFoundException("Wrong Password");
//			}
//		}
//		else
//		{
//			throw new CustomerNotFoundException("Customer Not Found");
//		}
//		
//	}

	@Override
	public String signOut(Customer customer) throws CustomerNotFoundException {
		return "Signout successful" ;
	}

	@Override
	public Customer updateCustomer(Customer add) {
		// TODO Auto-generated method stub
		Customer generateCust = repository.save(add);

		//return repository.save(add) ;
	//User user = new User();
		//user.setUserName(add.getEmail());
		//user.setPassword(add.getPassword());
		//user.setCustomer(generateCust);
		//user.setRole("User");
		//Userrepository.save(user);
		return generateCust;

	}

	@Override
	public List<Customer> viewAllCustomer() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}

	@Override
	public Optional<Customer> viewCustomer(Integer custId) {
		// TODO Auto-generated method stub
		return repository.findById(custId);	
	}
	

}

