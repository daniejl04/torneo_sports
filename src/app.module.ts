import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { TournamentModule } from './tournament/tournament.module';
import { ResultsModule } from './results/results.module';
import { PersistanceModule } from './persistance/persistance.module';

@Module({
  imports: [PlayersModule, TournamentModule, ResultsModule, PersistanceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
