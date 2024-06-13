import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultDto } from './dto/create-result.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Results')
@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @ApiOperation({ summary: 'createResult' })
  @ApiCreatedResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @Post()
  create(@Body() createResultDto: CreateResultDto) {
    return this.resultsService.createResult(createResultDto);
  }

  // @ApiOperation({ summary: 'findResult' })
  // @ApiCreatedResponse({ description: 'Success' })
  // @ApiNotFoundResponse({ description: 'Not Found' })
  // @ApiBadRequestResponse({ description: 'Bad Request' })
  // @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.resultsService.findResultsByTournament(id);
  // }
}
