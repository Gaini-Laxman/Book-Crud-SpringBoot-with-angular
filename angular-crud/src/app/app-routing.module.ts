import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component'; // Import AddBookComponent
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/book-list', pathMatch: 'full' },
  { path: 'book-list', component: BookListComponent },
  { path: 'add-book', component: AddBookComponent }, // Define route for add-book component
  { path: 'edit-book/:id', component: EditBookComponent },
  { path: 'delete-book', component: DeleteBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
