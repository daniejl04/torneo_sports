import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { Player } from 'src/players/entities/player.entity';

export class CreateTournamentDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsNumber()
  @ApiProperty()
  quantityPlayers: number;

  @IsArray()
  @ApiProperty()
  players: Player[];
}
