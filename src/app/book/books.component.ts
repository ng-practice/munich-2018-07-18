import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { BookService } from './lib/book.service';
import { Book } from './models/book';

@Component({
  selector: 'sde-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  query: string;
  books: Book[] = [];
  isCardView = true;

  constructor(private booksService: BookService) {}

  ngOnInit(): void {
    this.booksService.all().subscribe(books => (this.books = books));
  }

  updateQuery(search: { target: { value: string } }) {
    this.query = search.target.value;
  }

  appendBook(book: Book) {
    this.booksService
      .create(book)
      .pipe(switchMap(() => this.booksService.all()))
      .subscribe(books => (this.books = books));
  }

  sortCollection(book: Book) {
    this.books.sort((current, next) => next.rating - current.rating);
  }

  showCardView(shouldShow: boolean) {
    this.isCardView = shouldShow;
  }
}
