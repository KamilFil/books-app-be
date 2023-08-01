import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryBook } from '../../category-books/entities/category-book.entity';
@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'simple-array', default: null })
  author: string[];

  @Column({ type: 'simple-array', default: null })
  img: string;

  @ManyToOne(() => CategoryBook, (categories) => CategoryBook.name)
  categories: CategoryBook;

  @Column({ default: 0 })
  likeQuantity: number;

  @Column()
  description: string;

  @Column({ default: false })
  active: boolean;
}
