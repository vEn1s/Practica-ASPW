import { PartialType } from '@nestjs/mapped-types';
import { CreateResultadoDto } from './create-resultado.dto';
import { IsNumber } from 'class-validator';

export class UpdateResultadoDto extends PartialType(CreateResultadoDto) {
  @IsNumber()
  id: number;
}
