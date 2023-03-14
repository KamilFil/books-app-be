import { DataSourceOptions } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Book } from '../books/entities/book.entity';

export const DbConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  entities: [User, Book],
  database: 'books_db',
  bigNumberStrings: false,
  synchronize: true,
} as DataSourceOptions;
