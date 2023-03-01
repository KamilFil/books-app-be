import { Injectable } from '@nestjs/common';
import { CreateSendFileDto } from './dto/create-send-file.dto';
import { UpdateSendFileDto } from './dto/update-send-file.dto';

@Injectable()
export class SendFileService {
  create(createSendFileDto: CreateSendFileDto) {
    return 'This action adds a new sendFile';
  }

  findAll() {
    return `This action returns all sendFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sendFile`;
  }

  update(id: number, updateSendFileDto: UpdateSendFileDto) {
    return `This action updates a #${id} sendFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} sendFile`;
  }
}
