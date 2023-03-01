import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SendFileService } from './send-file.service';
import { CreateSendFileDto } from './dto/create-send-file.dto';
import { UpdateSendFileDto } from './dto/update-send-file.dto';

@Controller('send-file')
export class SendFileController {
  constructor(private readonly sendFileService: SendFileService) {}

  @Post()
  create(@Body() createSendFileDto: CreateSendFileDto) {
    return this.sendFileService.create(createSendFileDto);
  }

  @Get()
  findAll() {
    return this.sendFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sendFileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSendFileDto: UpdateSendFileDto) {
    return this.sendFileService.update(+id, updateSendFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sendFileService.remove(+id);
  }
}
