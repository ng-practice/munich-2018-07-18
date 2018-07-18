import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksComponent } from './books.component';

const routes: Route[] = [
  {
    path: '',
    component: BooksComponent,
    children: [{ path: 'create', component: BookAddFormComponent }]
  },
  { path: 'create-stand-alone', component: BookAddFormComponent },
  { path: ':isbn', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
