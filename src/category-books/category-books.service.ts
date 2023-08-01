import { Injectable } from '@nestjs/common';
import { CreateCategoryBookDto } from './dto/create-category-book.dto';
import { UpdateCategoryBookDto } from './dto/update-category-book.dto';
import { CategoryBook } from './entities/category-book.entity';

@Injectable()
export class CategoryBooksService {
  async create(createCategory: CreateCategoryBookDto) {
    const isCategory = await CategoryBook.findOneBy({
      name: createCategory.name,
    });

    if (isCategory) {
      return 'This category book is exist';
    }

    const newCategory = new CategoryBook();
    newCategory.name = createCategory.name;
    newCategory.description = createCategory.description;

    await newCategory.save();

    return newCategory.name;
  }

  async getAll() {
    return await CategoryBook.find();
  }

  async getOne(id: string) {
    return await CategoryBook.findOneBy({ id: id });
  }

  async update(id: string, updateCategory: UpdateCategoryBookDto) {
    const findCategory = await CategoryBook.findOneBy({
      id: updateCategory.id,
    });

    if (!findCategory) {
      return 'This category not exist';
    }

    await CategoryBook.update(id, updateCategory);

    return CategoryBook.name;
  }

  async remove(id: string) {
    const findCategory = await CategoryBook.findOneBy({
      id: id,
    });

    if (!findCategory) {
      return 'This category not exist';
    }

    await CategoryBook.delete(id);

    return CategoryBook.name;
  }
}
