import { IsNotEmpty } from 'class-validator';

export class StartBenchmarkDto {
  @IsNotEmpty()
  readonly benchmarkId: string;
}
