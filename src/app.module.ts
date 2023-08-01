import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './config/database.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SendFileModule } from './send-file/send-file.module';
import { BooksModule } from './books/books.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoryBooksModule } from './category-books/category-books.module';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(DbConfig),
    UsersModule,
    AuthModule,
    SendFileModule,
    BooksModule,
    ServeStaticModule.forRoot({
      serveRoot: '/uploads',
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    CategoryBooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
