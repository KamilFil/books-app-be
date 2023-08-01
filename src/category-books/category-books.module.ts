import { Module } from '@nestjs/common';
import { CategoryBooksService } from './category-books.service';
import { CategoryBooksController } from './category-books.controller';

@Module({
  controllers: [CategoryBooksController],
  providers: [CategoryBooksService],
})
export class CategoryBooksModule {}
