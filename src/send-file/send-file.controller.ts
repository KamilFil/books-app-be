import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from '../config/multer.config';

@Controller('send-file')
export class SendFileController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async addFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return `File ${file.originalname} update`;
  }
}
