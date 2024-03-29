import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Response } from 'express';
import { hashPwd } from '../utils/hashPwd';
import { SendMailService } from '../send-mail/send-mail.service';
import { addNewUsers } from '../templates/email/add-new-users';

@Injectable()
export class UsersService {
  constructor(private sendMailService: SendMailService) {}
  async create(createUserDto: CreateUserDto, res: Response) {
    const checkUsername = await User.findOneBy({
      username: createUserDto.username,
    });
    const checkEmail = await User.findOneBy({ email: createUserDto.email });

    if (checkUsername) {
      throw new BadRequestException('Users exist, change your username');
    }

    if (checkEmail) {
      throw new BadRequestException('Email exist, change your email');
    }

    const createUser = new User();

    createUser.username = createUserDto.username;
    createUser.email = createUserDto.email;
    createUser.password = hashPwd(createUserDto.password); // Will added hash password.

    await createUser.save();

    await this.sendMailService.sendMail(
      'admin@ecam,pl',
      'Users is register',
      addNewUsers(),
    );
    return res.json({ isSucces: true });
  }

  async getAll() {
    return await User.find();
  }

  async getOne(id: string) {
    return await User.findOneBy({ id: id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const checkId = await User.findOneBy({ id: id });

    if (!checkId) {
      throw new BadRequestException('User with given id not exist');
    }

    await User.update(id, updateUserDto);

    return `User ${updateUserDto.username} update`;
  }

  async remove(id: string) {
    const checkId = await User.findOneBy({ id: id });

    if (!checkId) {
      throw new BadRequestException('User with given id not exist');
    }

    await User.delete(id);

    return `Users ${checkId.username} delete`;
  }
}
