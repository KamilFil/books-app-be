import { CategoryBook } from '../../category-books/entities/category-book.entity';

export class CreateBookDto {
  name: string;
  author?: string[];
  categories: CategoryBook;
  description: string;
  img?: string;
}
