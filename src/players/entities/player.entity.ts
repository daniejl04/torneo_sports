//import { Result } from 'src/results/entities/result.entity';
import { PrizeDaily } from 'src/prize_daily/entities/prize_daily.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  //OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  points: number;

  @ManyToMany(() => Tournament, (tournament) => tournament.players)
  tournament: Tournament[];

  @ManyToMany(() => PrizeDaily, (prizeDaily) => prizeDaily.players)
  @JoinTable()
  prizeDaily: PrizeDaily[];
  // @OneToMany(() => Result, (result) => result.winner)
  // resultsWon: Result[];

  // @OneToMany(() => Result, (result) => result.loser)
  // resultsLost: Result[];
}
