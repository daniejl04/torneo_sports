import { Module } from '@nestjs/common';
import { PrizeDailyService } from './prize_daily.service';
import { PrizeDailyController } from './prize_daily.controller';
import { PersistanceModule } from 'src/persistance/persistance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/players/entities/player.entity';
import { PrizeDaily } from './entities/prize_daily.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PrizeDaily, Player]), PersistanceModule],
  controllers: [PrizeDailyController],
  providers: [PrizeDailyService],
})
export class PrizeDailyModule {}
