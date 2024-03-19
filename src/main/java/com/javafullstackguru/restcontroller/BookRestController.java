package com.javafullstackguru.restcontroller;

import com.javafullstackguru.entity.Book;
import com.javafullstackguru.repository.BookRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/")
public class BookRestController {

    private static final Logger LOGGER = LoggerFactory.getLogger(BookRestController.class);
    @Autowired
    private BookRepository bookRepo;

    @GetMapping("/books")
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<?> getBookById(@PathVariable Integer id) {
        Optional<Book> optionalBook = bookRepo.findById(id);
        if (optionalBook.isPresent()) {
            return ResponseEntity.ok(optionalBook.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book with ID " + id + " does not exist.");
        }
    }

    @PostMapping("/book")
    public ResponseEntity<?> saveBook(@RequestBody Book book) {
        try {
            Book savedBook = bookRepo.save(book);
            String successMessage = "Book Saved SucessFully With ID" + "-" + savedBook.getId();
            return ResponseEntity.status(HttpStatus.CREATED).body(successMessage);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save Book. Please try again !!");
        }
    }

    @PutMapping("/books/{id}")
    public ResponseEntity<?> updateBook(@PathVariable Integer id, @RequestBody Book book) {
        if (bookRepo.existsById(id)) {
            book.setId(id);
            Book savedBook = bookRepo.save(book);
            String successMessage = "Book with ID" + id + "Upadated SuccessFully !!";
            return ResponseEntity.ok(new UpdatedResponse(savedBook, successMessage));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    static class UpdatedResponse {
        private Book book;
        private String message;

        public UpdatedResponse(Book book, String message) {
            this.book = book;
            this.message = message;
        }

        public Book getBook() {
            return book;
        }

        public String getMessage() {
            return message;
        }
    }

    @DeleteMapping("books/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Integer id) {
        if (bookRepo.existsById(id)) {
            bookRepo.deleteById(id);
            return ResponseEntity.ok("Book with ID" + id + "Deleted Successfully !!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Book with ID" + id + "Does not Exist");
        }
    }
}
