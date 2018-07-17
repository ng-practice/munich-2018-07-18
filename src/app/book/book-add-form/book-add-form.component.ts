import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.css']
})
export class BookAddFormComponent {
  @Output() create = new EventEmitter<Book>();

  book = new Book('', '', '', '', '');

  raiseBookCreation() {
    this.create.emit({...this.book});
  }
}
