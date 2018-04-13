import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books;

  constructor(service: BooksService) {
    this.books = service.getBooks();
  }

  ngOnInit() {
  }

}
