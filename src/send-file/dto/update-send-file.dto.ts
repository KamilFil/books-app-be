import { PartialType } from '@nestjs/mapped-types';
import { CreateSendFileDto } from './create-send-file.dto';

export class UpdateSendFileDto extends PartialType(CreateSendFileDto) {}
