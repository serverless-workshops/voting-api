import { Controller, Post, Logger, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { v4 as uuidV4 } from 'uuid';
import { EndRequestDto as EndBenchmarkDto } from './endBenchmark.dto';
import { StartBenchmarkDto } from './startBenchmark.dto';
import { EndBenchmarkResponseDto } from './endBenchmarkResponse.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/team')
  createTeam(): any {
    // TODO: put teamId into dynamodb

    return {
      teamId: uuidV4(),
    };
  }

  @Post('/init/:teamId')
  getUuidV4(
    @Param() param: { teamId: string },
  ): { teamId: string; benchmarkId: string } {
    const benchmarkId = uuidV4();
    // put benchmarkId into dynamodb
    return { teamId: param.teamId, benchmarkId };
  }

  @Post('/start/:benchmarkId')
  start(
    @Param() param: StartBenchmarkDto,
  ): { message: string; benchmarkId: string } {
    // TODO: invoke requester

    return {
      message: 'benchmark job has been submitted.',
      benchmarkId: param.benchmarkId,
    };
  }

  @Post('/end/:benchmarkId')
  submitRanking(
    @Body() endBenchmarkDto: EndBenchmarkDto,
  ): EndBenchmarkResponseDto {
    Logger.log(endBenchmarkDto);

    // TODO: 答えと照合

    // TODO: 点数計算

    const res = new EndBenchmarkResponseDto();
    res.score = 100;
    return res;
  }
}
