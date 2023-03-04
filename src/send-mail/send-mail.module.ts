import { Module } from '@nestjs/common';
import { SendMailService } from './send-mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailConfig } from '../config/mail.config';

@Module({
  imports: [MailerModule.forRoot(MailConfig)],
  providers: [SendMailService],
  exports: [SendMailService],
})
export class SendMailModule {}
