import { IsArray, IsInt, IsNotEmpty } from 'class-validator';

export class AddPlayersDto {
  @IsInt()
  @IsNotEmpty()
  tournamentId: number;

  @IsArray()
  @IsNotEmpty()
  playerIds: string[];
}
