import { Module } from '@nestjs/common';
import { SendFileService } from './send-file.service';
import { SendFileController } from './send-file.controller';

@Module({
  controllers: [SendFileController],
  providers: [SendFileService]
})
export class SendFileModule {}
