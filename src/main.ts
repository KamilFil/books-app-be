import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config({ path: '.env' });
  console.log('DB_HOST:', process.env.DB_HOST);
  console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
  console.log('DB_PASSWORD:', process.env.URL);
  const app = await NestFactory.create(AppModule);


  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:3000', process.env.FRONTEND_URL],
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000, 'localhost', () =>
    console.log(`Server is running on port ${process.env.PORT || 3000}`),
  );
}
bootstrap();
