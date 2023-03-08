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

    await book.save();

    return `${book.name}`;
  }

  async findAll() {
    return await Book.find();
  }

  async findOne(id: string) {
    return await Book.findOneBy({ id: id });
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
