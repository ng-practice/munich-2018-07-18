import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  // <app-book-card [book]="someData"></app-book-data>
  @Input() book: Book;
  // <app-book-card [book]="someData" (rate)="sortCollection($event)"></app-book-data>
  @Output() rate = new EventEmitter<Book>();

  rateUp() {
    this.book.rating++;
    this.rate.emit(this.book);
  }

  rateDown() {
    this.book.rating--;
    this.rate.emit(this.book);
  }
}
