package com.example.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Book;

import com.example.repository.BookRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class BookController {

	@Autowired
	private BookRepository bookRepository;
	
	@DeleteMapping(value="/books/{bid}")
	public String deleteController(@PathVariable int bid) {
		bookRepository.deleteById(bid);
		return "";
	}
	
	@PutMapping(value="/books/{bid}")
	public Book updateController(@PathVariable int bid) {
		Book _book = bookRepository.findById(bid).get();
		_book.setBname(_book.getBname());
		_book.setBprice(_book.getBid());
		_book.setBauthorname(_book.getBauthorname());
		return bookRepository.save(_book);
	}
	
	@GetMapping("/books")
	public List<Book> getBooks(){
		return (List<Book>) bookRepository.findAll();
	}
	
	@PostMapping("/books")
	public Book addBook(@RequestBody Book book) {
		return bookRepository.save(book);
}
}