import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiPropertyOptional()
  name: string;

  // tags: Tag[];
}
