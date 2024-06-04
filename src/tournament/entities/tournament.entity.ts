import { Player } from 'src/players/entities/player.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  //OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tournament {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  quantityPlayers: number;

  @ManyToMany(() => Player, (player) => player.tournaments)
  @JoinTable()
  players: Player[];
}
