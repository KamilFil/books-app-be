import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DbConfig} from "./config/database.config";
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(DbConfig), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
