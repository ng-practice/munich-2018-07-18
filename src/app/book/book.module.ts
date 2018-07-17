import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UtilitiesModule } from '../utilities/utilities.module';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookCompactComponent } from './book-compact/book-compact.component';
import { BooksComponent } from './books.component';

@NgModule({
  imports: [CommonModule, FormsModule, UtilitiesModule],
  declarations: [
    BooksComponent,
    BookCardComponent,
    BookCompactComponent,
    BookAddFormComponent
  ],
  exports: [BooksComponent]
})
export class BooksModule {}
