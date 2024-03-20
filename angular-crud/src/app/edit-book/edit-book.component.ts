import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: Book = {
    id: 0,
    bookName: '',
    price: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString) {
      const id = +idString;
      this.bookService.getBookById(id).subscribe(book => this.book = book);
    } else {
      // Handle the error condition here, such as navigating to an error page or displaying a message to the user
      console.error("Error: Book ID not provided in route");
    }
  }
  

  updateBook(): void {
    this.bookService.updateBook(this.book).subscribe(() => {
      // Navigate back to book details after update
      this.router.navigate(['/view-book', this.book.id]);
    });
  }
}
