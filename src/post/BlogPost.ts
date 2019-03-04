export default class BlogPost {
  title: string;
  body: string;
  date: Date;

  constructor(title: string, body: string, date: Date) {
    this.title = title;
    this.body = body;
    this.date = date;
  }
}