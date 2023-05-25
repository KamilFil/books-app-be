import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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

  @Column({ default: 0 })
  likeQuantity: number;

  @Column()
  description: string;

  @Column({ default: false })
  active: boolean;
}
