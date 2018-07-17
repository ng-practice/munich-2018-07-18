import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UtilitiesModule } from '../utilities/utilities.module';
import { BookCardComponent } from './book-card/book-card.component';
import { BookCompactComponent } from './book-compact/book-compact.component';
import { BooksComponent } from './books.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';

@NgModule({
  imports: [CommonModule, UtilitiesModule],
  declarations: [BooksComponent, BookCardComponent, BookCompactComponent, BookAddFormComponent],
  exports: [BooksComponent]
})
export class BooksModule {}
