import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilitiesModule } from '../utilities/utilities.module';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookCompactComponent } from './book-compact/book-compact.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookService } from './lib/book.service';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilitiesModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksComponent,
    BookCardComponent,
    BookCompactComponent,
    BookAddFormComponent,
    BookDetailsComponent,
    SearchPipe
  ],
  exports: [BooksComponent],
  providers: [BookService]
})
export class BooksModule {}
