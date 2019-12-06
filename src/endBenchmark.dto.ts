import { IsNotEmpty, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class RankVotes {
  @IsNotEmpty()
  @IsNumber()
  readonly rank: number;

  @IsNotEmpty()
  @IsNumber()
  readonly votes: number;
}

// tslint:disable-next-line: max-classes-per-file
export class EndRequestDto {
  @ValidateNested()
  @Type(() => RankVotes)
  @IsNotEmpty()
  readonly christmas: RankVotes;

  @ValidateNested()
  @Type(() => RankVotes)
  @IsNotEmpty()
  readonly snow: RankVotes;

  @ValidateNested()
  @Type(() => RankVotes)
  @IsNotEmpty()
  readonly cold: RankVotes;

  @ValidateNested()
  @Type(() => RankVotes)
  @IsNotEmpty()
  readonly cocoa: RankVotes;
}
