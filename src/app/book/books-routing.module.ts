import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { BooksComponent } from './books.component';

const routes: Route[] = [
  {
    path: '',
    component: BooksComponent,
    children: [{ path: 'create', component: BookAddFormComponent }]
  },
  { path: 'create-stand-alone', component: BookAddFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
