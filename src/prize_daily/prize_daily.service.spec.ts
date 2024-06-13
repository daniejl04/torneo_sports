import { Test, TestingModule } from '@nestjs/testing';
import { PrizeDailyService } from './prize_daily.service';

describe('PrizeDailyService', () => {
  let service: PrizeDailyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrizeDailyService],
    }).compile();

    service = module.get<PrizeDailyService>(PrizeDailyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
