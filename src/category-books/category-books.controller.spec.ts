import { Test, TestingModule } from '@nestjs/testing';
import { CategoryBooksController } from './category-books.controller';
import { CategoryBooksService } from './category-books.service';

describe('CategoryBooksController', () => {
  let controller: CategoryBooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryBooksController],
      providers: [CategoryBooksService],
    }).compile();

    controller = module.get<CategoryBooksController>(CategoryBooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
