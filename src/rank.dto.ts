import { IsNotEmpty, IsArray } from 'class-validator';

export class RankDto {
  @IsNotEmpty()
  @IsArray()
  readonly ranks: [number];
}
