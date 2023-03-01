import { Role } from 'src/types/users/role.enum';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  username: string;

  @Column({ type: 'varchar', length: 56 })
  email: string;

  @Column({ type: 'varchar', length: 128 })
  password: string;

  @Column({ type: 'varchar', length: 36, nullable: true, default: null })
  logginTokenId: string;

  @Column({ default: Role.User })
  role: Role;
}
