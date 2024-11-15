import { IsInt, IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateResultadoDto {
  @IsInt()
  @IsNotEmpty()
  ID_Paciente: number;

  @IsInt()
  @IsNotEmpty()
  ID_TipoExamen: number;

  @IsString()
  @IsNotEmpty()
  Resultadoss: string;  // Aquí se mantiene el nombre correcto según tu entidad

  @IsNumber()
  @IsNotEmpty()
  ValorPagado: number;

  @IsString()
  Observacion: string;  // Observación es opcional, no tiene @IsNotEmpty()
}
