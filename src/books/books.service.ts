import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  async create(createBookDto: CreateBookDto) {
    const findBook = await Book.findOne({
      where: { name: createBookDto.name },
    });

    if (findBook) {
      throw new BadRequestException("Book's exist, change name");
    }

    const book = new Book();
    book.name = createBookDto.name;
    book.author = createBookDto.author;
    book.img = createBookDto.img;
    book.description = createBookDto.description;
    book.categories = createBookDto.categories;

    await book.save();

    return `${book.name}`;
  }

  async likeBook(id: string) {
    const findBook = await Book.findOneBy({ id: id });
    if (!findBook) {
      throw new BadRequestException("Book's not exist");
    }

    findBook.likeQuantity = findBook.likeQuantity + 1;

    await Book.save(findBook);
    return findBook.likeQuantity;
  }

  async active(id: string) {
    const findBook = await Book.findOneBy({ id: id });
    if (!findBook) {
      throw new BadRequestException("Book's not exist");
    }

    findBook.active = !findBook.active;
    await Book.save(findBook);
    return findBook.active;
  }

  async findAll() {
    return await Book.find({
      relations: {
        categories: true,
      },
    });
  }

  async findAllActive() {
    return await Book.find({ where: { active: true } });
  }

  async findOne(id: string) {
    const findBook = await Book.findOne({
      relations: { categories: true },
      where: { id: id, active: true },
    });
    if (!findBook) {
      throw new BadRequestException("Book's not exist");
    }
    return findBook;
  }

  async findBookCat(categoryName: string) {
    const findBookCat = await Book.createQueryBuilder('book')
      .innerJoin('book.categories', 'category')
      .where(`book.active = true`)
      .andWhere('category.name = :categoryName', {
        categoryName,
      })

      .getMany();

    if (findBookCat.length === 0) {
      throw new BadRequestException('Category not exist');
    }

    return findBookCat;
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const findBook = await Book.findOneBy({ id: id });

    if (!findBook) {
      throw new BadRequestException("Book's not exist");
    }

    await Book.update(id, updateBookDto);

    return `Update ${findBook.name} books`;
  }

  async remove(id: string) {
    const findBook = await Book.findOneBy({ id: id });

    if (!findBook) {
      throw new BadRequestException("Book's not exist");
    }

    await Book.delete(id);

    return `Remove ${findBook.name} books`;
  }
}
