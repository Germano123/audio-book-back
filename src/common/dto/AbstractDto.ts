'use strict';

import { AbstractEntity } from '../abstract.entity';

export class AbstractDto {
  // @ApiPropertyOptional()
  id: string;
  // @ApiPropertyOptional()
  createdAt: Date;
  // @ApiPropertyOptional()
  updatedAt: Date;

  constructor(entity: AbstractEntity) {
    this.id = entity.id;
    this.createdAt = entity.createdAt;
    this.updatedAt = entity.updatedAt;
  }
}
