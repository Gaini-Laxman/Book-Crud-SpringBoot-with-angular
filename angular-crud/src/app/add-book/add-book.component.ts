import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: Book = {
    id: null,
    bookName: '',
    price: null
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private bookService: BookService, private router: Router) { }

  addBook(): void {
    this.bookService.addBook(this.book)
      .subscribe(() => {
        this.successMessage = 'Book added successfully!';
        this.router.navigate(['/book-list']); // Navigate to book list page
      }, error => {
        this.errorMessage = 'Error adding book: ' + error.message;
      });
  }

  viewBookList(): void {
    this.router.navigate(['/book-list']); // Navigate to book list page
  }
}
