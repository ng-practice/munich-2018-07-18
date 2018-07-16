import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  // <app-book-card [book]="someData"></app-book-data>
  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

}
