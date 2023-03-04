import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SendMailModule } from '../send-mail/send-mail.module';

@Module({
  imports: [SendMailModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
