import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Observable } from '../../../../node_modules/rxjs';
import { switchMap, tap } from '../../../../node_modules/rxjs/operators';
import { BookService } from '../lib/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'sde-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  now = new Date();
  book: Book;
  book$: Observable<Book>;

  editForm: FormGroup;

  // paramSubscription: Subscription;
  // destroy$$ = new Subject();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private books: BookService
  ) {
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      subtitle: ['', [Validators.minLength(2)]]
    });
  }

  private fillForm(book: Book): void {
    this.editForm.patchValue({
      title: book.title,
      subtitle: book.subtitle
    });
  }

  updateBook() {
    const patchedBook = {...this.book, ...this.editForm.value};
    this.books.update(patchedBook).subscribe();
  }

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      // takeUntil(this.destroy$$),
      switchMap(params => this.books.getByIsbn(params.isbn)),
      tap(book => this.fillForm(book)),
      tap(book => this.book = book)
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
