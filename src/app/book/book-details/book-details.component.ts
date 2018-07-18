import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { switchMap } from '../../../../node_modules/rxjs/operators';
import { BookService } from '../lib/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'sde-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book = {} as Book;

  constructor(private route: ActivatedRoute, private books: BookService) { }

  ngOnInit() {
    // this.route.params.subscribe(params => params.isbn)
    this.route.params.pipe(
      switchMap(params => this.books.getByIsbn(params.isbn))
    ).subscribe(book => this.book = book);
  }

}
