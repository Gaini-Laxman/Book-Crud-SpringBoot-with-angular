import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router module
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) { } // Inject Router service

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getAllBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }

  navigateToAddBook(): void {
    this.router.navigate(['/add-book']); // Navigate to add book page
  }
}
