import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'sde-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  // <sde-book-card [book]="someData"></sde-book-data>
  @Input() book: Book;
  // <sde-book-card [book]="someData" (rate)="sortCollection($event)"></sde-book-data>
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
