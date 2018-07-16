export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public subtitle: string,
    public cover: string,
    public description: string,
    public authors: string[] = [],
    public rating = 0
  ) {}
}
