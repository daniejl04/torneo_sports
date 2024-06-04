import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Tournament } from 'src/tournament/entities/tournament.entity';

export class CreatePlayerDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  age: number;

  @ApiProperty()
  @IsOptional()
  tournament: Tournament;
}
