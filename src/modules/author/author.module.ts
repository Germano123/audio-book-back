import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorController } from './author.controller';
import { AuthorRepository } from './author.repository';
import { AuthorService } from './author.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorRepository])],
  controllers: [AuthorController],
  exports: [AuthorService],
  providers: [AuthorService],
})
export class AuthorModule {}
