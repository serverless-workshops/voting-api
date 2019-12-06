import { IsNotEmpty } from 'class-validator';

export class BenchmarkIdDto {
  @IsNotEmpty()
  readonly benchmarkId: string;
}
