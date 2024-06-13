import { Injectable } from '@nestjs/common';
import { CreatePrizeDailyDto } from './dto/create-prize_daily.dto';
import { UpdatePrizeDailyDto } from './dto/update-prize_daily.dto';

@Injectable()
export class PrizeDailyService {
  create(createPrizeDailyDto: CreatePrizeDailyDto) {
    return 'This action adds a new prizeDaily';
  }

  findAll() {
    return `This action returns all prizeDaily`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prizeDaily`;
  }

  update(id: number, updatePrizeDailyDto: UpdatePrizeDailyDto) {
    return `This action updates a #${id} prizeDaily`;
  }

  remove(id: number) {
    return `This action removes a #${id} prizeDaily`;
  }
}
