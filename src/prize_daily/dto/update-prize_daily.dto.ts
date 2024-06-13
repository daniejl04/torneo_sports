import { PartialType } from '@nestjs/swagger';
import { CreatePrizeDailyDto } from './create-prize_daily.dto';

export class UpdatePrizeDailyDto extends PartialType(CreatePrizeDailyDto) {}
