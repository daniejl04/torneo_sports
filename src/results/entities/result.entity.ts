//import { Player } from 'src/players/entities/player.entity';
//import { Tournament } from 'src/tournament/entities/tournament.entity';
import {
  Column,
  Entity,
  // ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Result {
  @PrimaryGeneratedColumn('increment')
  id: number;

  // @ManyToOne(() => Tournament, (tournament) => tournament.results)
  // tournament: Tournament;

  // @ManyToOne(() => Player, (player) => player.resultsWon)
  // winner: Player;

  // @ManyToOne(() => Player, (player) => player.resultsLost)
  // loser: Player;

  @Column()
  winnerScore: number;

  @Column()
  loserScore: number;
}
