import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { AuthorEntity } from '../author/author.entity';
import { BookDto } from './dto/BookDto';

@Entity('books')
export class BookEntity extends AbstractEntity<BookDto> {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => AuthorEntity, (author) => author.books, { nullable: false })
  author: AuthorEntity;

  // @Column()
  // tags: Tags[];

  dtoClass: new (entity: AbstractEntity<BookDto>, options?: any) => BookDto;
}
