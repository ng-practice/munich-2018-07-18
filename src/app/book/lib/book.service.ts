import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from '../models/book';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  all(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.booksApi);
  }

  create(book: Book): Observable<void> {
    return this.http.post<void>(environment.booksApi, book);
  }
}
