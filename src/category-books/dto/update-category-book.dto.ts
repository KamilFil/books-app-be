import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryBookDto } from './create-category-book.dto';

export class UpdateCategoryBookDto extends PartialType(CreateCategoryBookDto) {
  id: string;
}
