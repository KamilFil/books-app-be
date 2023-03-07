import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './config/database.config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SendFileModule } from './send-file/send-file.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DbConfig),
    UsersModule,
    AuthModule,
    SendFileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
