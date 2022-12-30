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
@Table(name="Customer123")
@Entity
public class Customer {
	
	@Id
	private long cId;
	private String cName;
	private String cEmail;
	private String cPhone;
}
