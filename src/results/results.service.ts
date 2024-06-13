import { Injectable } from '@nestjs/common';
import { CreateResultDto } from './dto/create-result.dto';
import { Result } from './entities/result.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(Result)
    private readonly resultRepository: Repository<Result>,
  ) {}
  async createResult(createResultDto: CreateResultDto) {
    const result = this.resultRepository.create(createResultDto);
    return this.resultRepository.save(result);
  }

  // findResultsByTournament(tournamentId: number) {
  //   return this.resultRepository.find({
  //     where: { tournament: { id: tournamentId } },
  //     relations: ['winner', 'loser', 'tournament'],
  //   });
  // }
}
