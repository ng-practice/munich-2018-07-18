import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card/book-card.component';
import { BooksComponent } from './books.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BooksComponent, BookCardComponent],
  exports: [BooksComponent]
})
export class BooksModule { }
