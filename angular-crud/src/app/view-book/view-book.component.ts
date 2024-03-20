import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
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
}  
