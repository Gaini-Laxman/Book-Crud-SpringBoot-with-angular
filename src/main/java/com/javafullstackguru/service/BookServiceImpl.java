package com.javafullstackguru.service;

import com.javafullstackguru.entity.Book;
import com.javafullstackguru.repository.BookRepository;

import java.util.List;

public class BookServiceImpl implements BookService{


    private BookRepository bookRepo;
    @Override
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    @Override
    public Book saveBook(Book book) {
        return bookRepo.save(book);
    }

    @Override
    public Book getBookById(Integer id) {
        return bookRepo.findById(id).get();
    }

    @Override
    public Book updateBook(Book book) {
        return bookRepo.save(book);
    }

    @Override
    public void deleteBookById(Integer id) {
         bookRepo.deleteById(id);
    }
}
