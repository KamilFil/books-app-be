import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class SendFileService {
  async addFile(file: Express.Multer.File) {}
}
