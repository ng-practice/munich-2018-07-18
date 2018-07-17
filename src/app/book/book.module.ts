import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksComponent } from './books.component';
import { BookCompactComponent } from './book-compact/book-compact.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BooksComponent, BookCardComponent, BookCompactComponent],
  exports: [BooksComponent]
})
export class BooksModule { }
