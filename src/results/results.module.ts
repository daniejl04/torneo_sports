import { Module } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ResultsController } from './results.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/players/entities/player.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Result } from './entities/result.entity';
import { PersistanceModule } from 'src/persistance/persistance.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Result, Player, Tournament]),
    PersistanceModule,
  ],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}
