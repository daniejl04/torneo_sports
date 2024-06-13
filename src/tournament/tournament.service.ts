import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTournamentDto, UpdateTournamentDto, AddPlayersDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { In, Repository } from 'typeorm';
import { Player } from 'src/players/entities/player.entity';
@Injectable()
export class TournamentService {
  constructor(
    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}
  async create(createTournament: CreateTournamentDto) {
    const { name } = createTournament;

    const tournament = await this.tournamentRepository.findOneBy({
      name: name,
    });

    if (tournament) {
      throw new HttpException('Tournament already exists', HttpStatus.GONE); // indicates that the resource is not available
    }

    try {
      const tournament = new Tournament();
      tournament.name = createTournament.name;
      tournament.quantityPlayers = createTournament.quantityPlayers;
      tournament.players = createTournament.players;

      await this.tournamentRepository.save(tournament);

      return {
        mensage: 'ready!, Tournament create',
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findAll() {
    try {
      const tournament: Tournament[] = await this.tournamentRepository.find({
        relations: ['players'],
      });
      return {
        mensage: 'founds',
        tournamentFounds: tournament,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: number) {
    try {
      const tournament: Tournament = await this.tournamentRepository.findOne({
        where: { id },
        relations: ['players'],
      });

      if (!tournament) {
        throw new NotFoundException('Tournament not found');
      }

      return {
        mensage: 'it was found',
        tournamentFounds: tournament,
      };
    } catch (error) {
      throw new NotFoundException('Tournament not found');
    }
  }

  async update(id: number, updateTournament: UpdateTournamentDto) {
    try {
      const iFtournament: Tournament =
        await this.tournamentRepository.findOneBy({
          id: id,
        });

      if (!iFtournament) {
        throw new NotFoundException('tournament not found');
      }

      const tournament = new Tournament();
      tournament.name = updateTournament.name;
      tournament.quantityPlayers = updateTournament.quantityPlayers;
      tournament.players = updateTournament.players;

      await this.tournamentRepository.save(tournament);

      return {
        mensage: 'tournament updated',
        tournament: tournament,
      };
    } catch (error) {
      throw new InternalServerErrorException('hoal');
    }
  }

  async remove(id: number) {
    const tournament: Tournament = await this.tournamentRepository.findOneBy({
      id: id,
    });

    if (!tournament) {
      throw new NotFoundException('Tournament not found');
    }

    try {
      await this.tournamentRepository.delete(id);

      return {
        mensage: 'Tournament deleted successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async addPlayers(addPlayers: AddPlayersDto) {
    const { tournamentId, playerIds } = addPlayers;
    const tournament = await this.tournamentRepository.findOne({
      where: { id: tournamentId },
      relations: ['players'],
    });

    if (!tournament) {
      throw new Error('Tournament not found');
    }

    const players = await this.playerRepository.find({
      where: {
        id: In(playerIds),
      },
    });

    tournament.players = [...tournament.players, ...players];

    return this.tournamentRepository.save(tournament);
  }
}
