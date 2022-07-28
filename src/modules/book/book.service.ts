import { Injectable } from '@nestjs/common';
import { AuthorService } from '../author/author.service';
import { BookRepository } from './book.repository';
import { BookDto } from './dto/BookDto';

@Injectable()
export class BookService {
  constructor(
    private repo: BookRepository,
    public readonly authorService: AuthorService,
  ) {}

  // TODO: correct return
  async createBook(book: BookDto): Promise<any> {
    return 'Create new book';
  }
}
