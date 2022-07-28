import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { BookEntity } from '../book/book.entity';
import { AuthorDto } from './dto/AuthorDto';

@Entity('authors')
export class AuthorEntity extends AbstractEntity<AuthorDto> {
  @Column()
  name: string;

  @OneToMany(() => BookEntity, (book) => book.author, { nullable: true })
  books: BookEntity[];

  dtoClass: new (entity: AbstractEntity<AuthorDto>, options?: any) => AuthorDto;
}
