import { Component, OnInit } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'sde-book-compact',
  templateUrl: './book-compact.component.html',
  styleUrls: ['./book-compact.component.css']
})
export class BookCompactComponent extends BookCardComponent {}
