import { Component } from '@angular/core';
import { Book } from './book/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myFavoriteBook = new Book(
    '120398235',
    'Hello Munich',
    'stellenanzeigen.de',
    'https://',
    'Lorem Ipsum',
    ['Dr. Author', 'Someone Else']
  );
}
