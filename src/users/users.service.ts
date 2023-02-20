import {BadRequestException, Injectable} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import {Response} from "express";

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto, res: Response) {

    const checkUsername = await User.findOneBy({username: createUserDto.username})
    const checkEmail = await User.findOneBy({email: createUserDto.email})

    if (checkUsername) {
      throw new BadRequestException("Users exist, change your username")
    }

    if (checkEmail) {
      throw new BadRequestException("Email exist, change your email")
    }

    const createUser = new User()

    createUser.username = createUserDto.username;
    createUser.email = createUserDto.email;
    createUser.password = createUserDto.password; // Will added hash password.

    await createUser.save()

    return res.json({isSucces:true})

  }

  getAll() {
    return `This action returns all users`;
  }

  getOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
