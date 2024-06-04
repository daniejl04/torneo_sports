import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { Player } from 'src/players/entities/player.entity';
import { PersistanceModule } from 'src/persistance/persistance.module';
import { Result } from 'src/results/entities/result.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tournament, Player, Result]),
    PersistanceModule,
  ],
  controllers: [TournamentController],
  providers: [TournamentService],
})
export class TournamentModule {}
