import { Test, TestingModule } from '@nestjs/testing';
import { CategoryBooksService } from './category-books.service';

describe('CategoryBooksService', () => {
  let service: CategoryBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryBooksService],
    }).compile();

    service = module.get<CategoryBooksService>(CategoryBooksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
