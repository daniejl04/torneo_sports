import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { TournamentModule } from './tournament/tournament.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [PlayersModule, TournamentModule, ResultsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
