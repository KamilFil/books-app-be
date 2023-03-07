import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { HttpException, HttpStatus } from '@nestjs/common';
import { diskStorage } from 'multer';
import { Request } from 'express';
import { existsSync, mkdirSync } from 'fs';

export const multerConfig: MulterOptions = {
  limits: {
    fileSize: 5242880,
  },
  fileFilter(
    req: Request,
    file: Express.Multer.File,
    done: (error: Error, acceptFile: boolean) => void,
  ) {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      done(null, true);
    } else {
      done(
        new HttpException(
          `This file type not supported`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },
  storage: diskStorage({
    destination(
      req: Request,
      file: Express.Multer.File,
      done: (error: Error | null, filename: string) => void,
    ) {
      const uploadPath = './uploads';

      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }

      const findFile = `${uploadPath}/${file.originalname}`;
      if (existsSync(findFile)) {
        done(
          new HttpException(`This file exist`, HttpStatus.BAD_REQUEST),
          findFile,
        );
      }

      done(null, uploadPath);
    },
    filename(
      req: Request,
      file: Express.Multer.File,
      done: (error: Error | null, filename: string) => void,
    ) {
      const fileName = `${file.originalname}`;
      done(null, fileName);
    },
  }),
};
