import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { PersistanceModule } from 'src/persistance/persistance.module';
import { Result } from 'src/results/entities/result.entity';
import { PrizeDaily } from 'src/prize_daily/entities/prize_daily.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player, Tournament, Result, PrizeDaily]),
    PersistanceModule,
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
