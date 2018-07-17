import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCompactComponent } from './book-compact.component';

describe('BookCompactComponent', () => {
  let component: BookCompactComponent;
  let fixture: ComponentFixture<BookCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
