import { IsString } from 'class-validator';

export class CreateTipoExamenDto {
  @IsString()
  Descripcion: string;

  @IsString()
  Indicaciones: string;
}
