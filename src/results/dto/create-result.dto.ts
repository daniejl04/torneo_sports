import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateResultDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  tournamentId: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  winnerId: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  loserId: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  winnerScore: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  loserScore: number;
}
