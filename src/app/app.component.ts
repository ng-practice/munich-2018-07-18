import { Component } from '@angular/core';
import { Book } from './book/models/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  books = [
    new Book(
      '120398235',
      'Hello Munich',
      'stellenanzeigen.de',
      'https://',
      'Lorem Ipsum',
      ['Dr. Author', 'Someone Else']
    ),
    new Book(
      '12039523235',
      'Hello Karlsruhe',
      'stellenanzeigen.de',
      'https://',
      'Lorem Ipsum',
      ['Dr. Author', 'Someone Else']
    ),
    new Book(
      '120218235',
      'Hello Leipzig',
      'stellenanzeigen.de',
      'https://',
      'Lorem Ipsum',
      ['Dr. Author', 'Someone Else']
    )
  ];
}
