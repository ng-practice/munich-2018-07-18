import { BooksModule } from './book.module';

describe('BookModule', () => {
  let bookModule: BooksModule;

  beforeEach(() => {
    bookModule = new BooksModule();
  });

  it('should create an instance', () => {
    expect(bookModule).toBeTruthy();
  });
});
