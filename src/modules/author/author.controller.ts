import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/CreateAuthorDto';

@ApiTags('Author')
@Controller('author')
export class AuthorController {
  constructor(private service: AuthorService) {}

  // Ceate Read Update Delete
  @Post('create-author')
  async createAuthor(@Body() author: CreateAuthorDto): Promise<any> {
    return await this.service.createAuthor(author);
  }

  @Get('get-all')
  async getAll() {
    return null; // await this.service.get();
  }

  @Post('get-author')
  async getAuthor() {
    return null; // await this.service.get();
  }

  @Post('update-author')
  async updateAuthor() {
    return null; // await this.service.get();
  }

  @Post('delete-author')
  async deleteAuthor() {
    // a request is sent to super user to delete author
    return null; // await this.service.get();
  }
}
