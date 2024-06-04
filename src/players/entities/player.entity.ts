import { Tournament } from 'src/tournament/entities/tournament.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Tournament, (tournament) => tournament.players)
  tournament: Tournament;
}
