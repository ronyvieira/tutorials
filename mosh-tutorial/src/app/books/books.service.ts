import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

 constructor() { }

  getBooks() {
    return [
      'Anna Karenina by Leo Tolstoy',
      'Madame Bovary by Gustave Flaubert',
      'War and Peace by Leo Tolstoy',
      'The Great Gatsby by F. Scott Fitzgerald',
      'Lolita by Vladimir Nabokov',
      'Middlemarch by George Eliot',
      'The Adventures of Huckleberry Finn by Mark Twain',
      'The Stories of Anton Chekhov by Anton Chekho'
    ];
  }

}

