import { Test, TestingModule } from '@nestjs/testing';
import { SendFileController } from './send-file.controller';
import { SendFileService } from './send-file.service';

describe('SendFileController', () => {
  let controller: SendFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendFileController],
      providers: [SendFileService],
    }).compile();

    controller = module.get<SendFileController>(SendFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
