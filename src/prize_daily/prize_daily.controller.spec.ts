import { Test, TestingModule } from '@nestjs/testing';
import { PrizeDailyController } from './prize_daily.controller';
import { PrizeDailyService } from './prize_daily.service';

describe('PrizeDailyController', () => {
  let controller: PrizeDailyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrizeDailyController],
      providers: [PrizeDailyService],
    }).compile();

    controller = module.get<PrizeDailyController>(PrizeDailyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
