import { Controller, Get, Post, Logger, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuidV4 } from 'uuid';
import { RankDto } from './rank.dto';
import { BenchmarkIdDto } from './benchmarkId.dto';
import { EndResponseDto } from './endResponse.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/init')
  getUuidV4(): { benchmarkId: string } {
    return { benchmarkId: uuidV4() };
  }

  @Post('/start')
  start(
    @Body() param: BenchmarkIdDto,
  ): { message: string; benchmarkId: string } {
    // TODO: invoke requester

    return {
      message: 'benchmark job has been submitted.',
      benchmarkId: param.benchmarkId,
    };
  }

  @Post('/end/:benchmarkId')
  submitRanking(@Body() rankDto: RankDto): EndResponseDto {
    Logger.log(rankDto);

    // TODO: 答えと照合

    // TODO: 点数計算

    const res = new EndResponseDto();
    res.ranks = rankDto.ranks;
    res.score = 100;
    return res;
  }
}
