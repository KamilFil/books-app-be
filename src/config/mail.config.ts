import { MailerOptions } from '@nestjs-modules/mailer';

export const MailConfig: MailerOptions = {
  transport: {
    host: '127.0.0.1',
    port: 2500,
    secure: false,
  },
  defaults: {
    from: 'admin@test.tes.pl',
  },
};
