import { BooksService } from './books.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BooksListComponent],
  exports: [BooksListComponent],
  providers: [BooksService]
})
export class BooksModule { }
