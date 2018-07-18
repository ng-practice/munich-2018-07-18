import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { switchMap, takeUntil } from '../../../../node_modules/rxjs/operators';
import { BookService } from '../lib/book.service';
import { Book } from '../models/book';
import {
  Subscription,
  Subject,
  Observable
} from '../../../../node_modules/rxjs';

@Component({
  selector: 'sde-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  // book: Book = {} as Book;
  now = new Date();
  book$: Observable<Book>;

  // paramSubscription: Subscription;
  // destroy$$ = new Subject();

  constructor(private route: ActivatedRoute, private books: BookService) {}

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      // takeUntil(this.destroy$$),
      switchMap(params => this.books.getByIsbn(params.isbn))
    );
    // .subscribe(
    //   // next
    //   book => (this.book = book),
    //   // err
    //   () => {},
    //   // complete
    //   () => console.log('FINISHED')
    // );
  }

  // ngOnDestroy(): void {
  //   this.destroy$$.next();
  //   this.destroy$$.complete();
  //   // this.paramSubscription.unsubscribe();
  // }
}
