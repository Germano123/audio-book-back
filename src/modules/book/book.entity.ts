import { Column, Entity } from "typeorm";
import { AbstractEntity } from "src/common/abstract.entity";
import { BookDto } from "./dto/BookDto";

@Entity("books")
export class BookEntity extends AbstractEntity<BookDto> {

    dtoClass: new (entity: AbstractEntity<BookDto>, options?: any) => BookDto;
}