import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  bookId: number = 0;
  books: any;

  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    // Extract book id from route parameter
      this.route.params.subscribe(params => {
      this.bookId = +params['id'];
    });
  }

  confirmDelete(): void {
    if (this.bookId) {
      this.bookService.deleteBookById(this.bookId).subscribe(() => {
        // Redirect to book list after deletion
        this.router.navigate(['/book-list']);
      });
    }
  }
}
