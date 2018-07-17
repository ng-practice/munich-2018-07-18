import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'sde-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.css']
})
export class BookAddFormComponent {
  authors = { value: '' };
  @Output() create = new EventEmitter<Book>();

  book = new Book('', '', '', '', '');

  raiseBookCreation() {
    this.create.emit({ ...this.book });
  }

  setAuthors(authors: string) {
    this.book.authors = authors.split(',').filter(name => !!name);
  }
}
