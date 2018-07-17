import { Component } from '@angular/core';

import { Book } from './models/book';

@Component({
  selector: 'sde-books',
  templateUrl: './books.component.html',
styleUrls: ['./books.component.css']
})
export class BooksComponent {
  isCardView = true;

  books = [
    new Book(
      '120398235',
      'Hello Munich',
      'stellenanzeigen.de',
      'https://',
      'Lorem Ipsum',
      ['Dr. Author', 'Someone Else']
    ),
    new Book(
      '12039523235',
      'Hello Karlsruhe',
      'stellenanzeigen.de',
      'https://',
      'Lorem Ipsum',
      ['Dr. Author', 'Someone Else']
    ),
    new Book(
      '120218235',
      'Hello Leipzig',
      'stellenanzeigen.de',
      'https://',
      'Lorem Ipsum',
      ['Dr. Author', 'Someone Else']
    )
  ];

  appendBook(book: Book) {
    this.books.push(book);
  }

  sortCollection(book: Book) {
    // console.warn(book);
    this.books.sort((current, next) => next.rating - current.rating);
  }

  showCardView(shouldShow: boolean) {
    this.isCardView = shouldShow;
  }
}
