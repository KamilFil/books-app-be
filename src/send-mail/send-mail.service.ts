import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendMailService {
  constructor(private readonly sendMailService: MailerService) {}
  async sendMail(to: string, subject: string, html: string): Promise<any> {
    await this.sendMailService.sendMail({
      to,
      subject,
      html,
    });
  }
}
