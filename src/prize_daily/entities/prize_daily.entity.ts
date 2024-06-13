import { Player } from 'src/players/entities/player.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PrizeDaily {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  range: string;

  @Column()
  description: string;

  @ManyToMany(() => Player, (player) => player.prizeDaily)
  players: Player[];
}
