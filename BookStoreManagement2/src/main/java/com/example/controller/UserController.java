package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;



import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.repository.UserRepository;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins ="http://localhost:4200" )
public class UserController {

	@Autowired
	private UserRepository repo;
	
	@PostMapping("/login")
	public ResponseEntity<User> login(@RequestBody User userData){
		System.out.println(userData);
		User user=repo.findByUserId(userData.getUserId());
		if(user.getPassword().equals(userData.getPassword()))
		return ResponseEntity.ok(user);
		return (ResponseEntity<User>)ResponseEntity.internalServerError();
	}
	@PostMapping("/register")
	public ResponseEntity<User>registerUser(@RequestBody User user) {
    System.out.println("Controller called");
	return ResponseEntity.ok(repo.save(user));
	}
}
