import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookService } from './book.service';
import { BookDto } from './dto/BookDto';

@ApiTags('Books')
@Controller('book')
export class BookController {
  constructor(public readonly service: BookService) {}

  @Post('create-book')
  // TODO: correct return
  async createBook(@Body() book: BookDto): Promise<any> {
    return await this.service.createBook;
  }

  // get all (with filters author, book, creator, tags)
  // @Post("get-all-books")
  // @Post("update-book")
  // @Post("delete-book")
  // Create Read Update Delete
}
