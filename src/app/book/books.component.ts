import { Component, OnInit } from '@angular/core';

import { Book } from './models/book';
import { BookService } from './lib/book.service';

@Component({
  selector: 'sde-books',
  templateUrl: './books.component.html',
styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  isCardView = true;

  constructor(private booksService: BookService) {}

  ngOnInit(): void {
    this.booksService.all().subscribe(books => this.books = books);
  }

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
