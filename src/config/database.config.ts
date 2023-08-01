import { DataSourceOptions } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Book } from '../books/entities/book.entity';
import { CategoryBook } from '../category-books/entities/category-book.entity';

export const DbConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'books_db',
  entities: [User, Book, CategoryBook],
  bigNumberStrings: false,
  synchronize: true,
} as DataSourceOptions;
