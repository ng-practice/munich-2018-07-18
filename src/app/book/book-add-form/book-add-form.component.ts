import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.css']
})
export class BookAddFormComponent {
  @Output() create = new EventEmitter<Book>();

  raiseBookCreation(
    isbn: HTMLInputElement,
    title: HTMLInputElement,
    subtitle: HTMLInputElement,
    rating: HTMLInputElement,
    description: HTMLTextAreaElement
  ) {
    const book = new Book(
      isbn.value,
      title.value,
      subtitle.value,
      '',
      description.value,
      [],
      +rating.value
    );

    this.create.emit(book);
  }
}
