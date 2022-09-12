package com.cg.BankingApp.service;

import java.util.List;
import java.util.Optional;

import com.cg.BankingApp.entity.Customer;
import com.cg.BankingApp.exception.CustomerNotFoundException;

public interface ICustomerService {

	
	public Customer addCustomer(Customer customer);
	public Customer removeCustomer(Customer customer)throws CustomerNotFoundException;
	//public Customer validateCustomer(Customer customer) throws CustomerNotFoundException;
	public String signOut(Customer customer)throws CustomerNotFoundException;
	public Customer updateCustomer(Customer add);
	public List<Customer> viewAllCustomer();
	public Optional<Customer> viewCustomer(Integer custId);

}
