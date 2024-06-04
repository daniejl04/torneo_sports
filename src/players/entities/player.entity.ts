import { Result } from 'src/results/entities/result.entity';
import { Tournament } from 'src/tournament/entities/tournament.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
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
  tournaments: Tournament[];

  @OneToMany(() => Result, (result) => result.winner)
  resultsWon: Result[];

  @OneToMany(() => Result, (result) => result.loser)
  resultsLost: Result[];
}
