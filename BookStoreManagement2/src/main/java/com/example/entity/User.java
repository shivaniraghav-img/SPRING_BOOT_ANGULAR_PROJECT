package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="loginUser")
public class User {
    @Id
	private String userId;
    private String name;
    private String email;
    private String phone;
    private String cpassword;
    private String gender;
	private String password;
	
	
}
