import { Injectable } from '@nestjs/common';
import { AuthorEntity } from './author.entity';
import { AuthorRepository } from './author.repository';
import { CreateAuthorDto } from './dto/CreateAuthorDto';

@Injectable()
export class AuthorService {
  constructor(private repo: AuthorRepository) {}

  async find(options: Partial<{ name: string }>): Promise<AuthorEntity> {
    return await this.repo
      .createQueryBuilder('author')
      .select()
      .where('author.name = :name', { name: options.name })
      // .orWhere("")
      .getOne();
  }

  async createAuthor(author: CreateAuthorDto): Promise<AuthorEntity> {
    let _author = await this.find({ name: author.name });
    if (!_author) {
      const _authorEntity = await this.repo.create(author);
      _author = await this.repo.save(_authorEntity);
    }

    return _author;
  }
}
