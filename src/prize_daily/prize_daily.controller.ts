import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrizeDailyService } from './prize_daily.service';
import { CreatePrizeDailyDto } from './dto/create-prize_daily.dto';
import { UpdatePrizeDailyDto } from './dto/update-prize_daily.dto';

@Controller('prize-daily')
export class PrizeDailyController {
  constructor(private readonly prizeDailyService: PrizeDailyService) {}

  @Post()
  create(@Body() createPrizeDailyDto: CreatePrizeDailyDto) {
    return this.prizeDailyService.create(createPrizeDailyDto);
  }

  @Get()
  findAll() {
    return this.prizeDailyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prizeDailyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrizeDailyDto: UpdatePrizeDailyDto) {
    return this.prizeDailyService.update(+id, updatePrizeDailyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prizeDailyService.remove(+id);
  }
}
