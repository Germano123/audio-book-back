import { EntityRepository, Repository } from 'typeorm';
import { BookEntity } from './book.entity';

@EntityRepository(BookEntity)
export class BookRepository extends Repository<BookEntity> {}
