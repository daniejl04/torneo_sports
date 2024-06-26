import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';
import { Tournament } from 'src/tournament/entities/tournament.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,
  ) {}

  async create(createPlayer: CreatePlayerDto) {
    const player = await this.playerRepository.findOneBy({
      name: createPlayer.name,
    });

    if (player) {
      throw new HttpException('Player already exists', HttpStatus.GONE); // indicates that the resource is not available
    }
    try {
      await this.playerRepository.save(createPlayer);
      return {
        mensage: 'ready!, Player create',
      };
    } catch (error) {
      throw new InternalServerErrorException('uno');
    }
  }

  async findAll() {
    try {
      const players: Player[] = await this.playerRepository.find({
        relations: ['tournaments'],
      });
      return {
        mensage: 'founds',
        playerFounds: players,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string) {
    try {
      const player: Player = await this.playerRepository.findOneBy({ id: id });

      if (!player) {
        throw new NotFoundException('Player not found');
      }

      return {
        mensage: 'it was found',
        playerFounds: player,
      };
    } catch (error) {
      throw new NotFoundException('Player not found');
    }
  }

  async update(id: string, updatePlayer: UpdatePlayerDto) {
    try {
      const player: Player = await this.playerRepository.findOne({
        where: { id },
        relations: ['tournament'],
      });

      if (!player) {
        throw new NotFoundException('Player not found');
      }

      const tournament = await this.tournamentRepository.findOneBy({
        id: updatePlayer.tournament.id,
      });
      if (!tournament) {
        throw new NotFoundException('Author not found');
      }

      player.name = updatePlayer.name;
      player.age = updatePlayer.age;
      player.points = updatePlayer.points;

      await this.playerRepository.save(player);

      return {
        mensage: 'player updated',
        player: player,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} player`;
  // }
}
