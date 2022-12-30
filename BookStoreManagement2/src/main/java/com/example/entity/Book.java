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
@Table(name="Book123")
@Entity
public class Book {
    @Id
	private int bid;
	private String bname;
	private int bprice;
	private String bauthorname;
}
