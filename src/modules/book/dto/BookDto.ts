import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/AbstractDto';

export class BookDto extends AbstractDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  author: string;
}
