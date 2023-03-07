import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { SendFileService } from './send-file.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from '../config/multer.config';

@Controller('send-file')
export class SendFileController {
  constructor(private readonly sendFileService: SendFileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async addFile(@UploadedFile() file: Express.Multer.File) {
    return `File ${file.originalname} update`;
  }
}
