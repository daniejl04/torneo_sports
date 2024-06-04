import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Tournament } from 'src/tournament/entities/tournament.entity';

export class CreatePlayerDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  points: number;

  @ApiProperty()
  @IsOptional()
  tournament?: Tournament;
}
