import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get('active/:id')
  active(@Param('id', ParseUUIDPipe) id: string) {
    return this.booksService.active(id);
  }

  @Get('active')
  findAllActive() {
    return this.booksService.findAllActive();
  }

  @Get('like/:id')
  likeSystem(@Param('id', ParseUUIDPipe) id: string) {
    return this.booksService.likeBook(id);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get('category/:categoryName')
  findBookCat(@Param('categoryName') categoryName: string) {
    return this.booksService.findBookCat(categoryName);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
