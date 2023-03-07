import { Test, TestingModule } from '@nestjs/testing';
import { SendFileService } from './send-file.service';

describe('SendFileService', () => {
  let service: SendFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendFileService],
    }).compile();

    service = module.get<SendFileService>(SendFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
