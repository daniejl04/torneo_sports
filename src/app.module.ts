import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { TournamentModule } from './tournament/tournament.module';
import { ResultsModule } from './results/results.module';
import { PersistanceModule } from './persistance/persistance.module';
import { PrizeDailyModule } from './prize_daily/prize_daily.module';

@Module({
  imports: [PlayersModule, TournamentModule, ResultsModule, PersistanceModule, PrizeDailyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
