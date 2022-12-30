package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Customer;
import com.example.repository.CustomerRepository;


@RestController
@CrossOrigin(origins= "http://localhost:4200")
public class CustomerController {
    
	@Autowired
	private CustomerRepository customerRepository;
	
	@GetMapping("/customers/get")
	public List<Customer> getAllCustomers(){
		return  customerRepository.findAll();
	}
	
	@PostMapping("/customers/add")
	public Customer addCustomer(@RequestBody Customer customer) {
		return customerRepository.save(customer);
	}
}
