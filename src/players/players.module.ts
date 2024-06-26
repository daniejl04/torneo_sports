import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import { PersistanceModule } from 'src/persistance/persistance.module';

@Module({
  imports: [TypeOrmModule.forFeature([Player, Tournament]), PersistanceModule],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}
