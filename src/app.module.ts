import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DbConfig} from "./config/database.config";

@Module({
  imports: [TypeOrmModule.forRoot(DbConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
