import { DataSourceOptions } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Book } from '../books/entities/book.entity';
import { CategoryBook } from '../category-books/entities/category-book.entity';

export const DbConfig = {
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  username: process.env.DB_USERNAME ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DB_NAME ?? 'books_db',
  entities: [User, Book, CategoryBook],
  bigNumberStrings: false,
  logging: false,
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
} as DataSourceOptions;
