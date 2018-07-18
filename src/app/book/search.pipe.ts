import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './models/book';

@Pipe({
  // <element [data]="books | search:query">
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(books: Book[], query: string): Book[] {
    if (!books || !query ) {
      return books;
    }

    return books
      .filter(book => !!book.title)
      .filter(book => book.title.includes(query));
  }
}
