import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  all(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.booksApi);
  }

  getByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${environment.booksApi}/${isbn}`);
  }

  create(book: Book): Observable<void> {
    return this.http.post<void>(environment.booksApi, book);
  }
}
