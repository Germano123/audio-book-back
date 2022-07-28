import { ApiProperty } from '@nestjs/swagger';
import { AbstractDto } from '../../../common/dto/AbstractDto';

export class AuthorDto extends AbstractDto {
  @ApiProperty()
  name: string;
}
