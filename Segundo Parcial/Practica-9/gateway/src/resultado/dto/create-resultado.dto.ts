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
  Resultadoss: string;  

  @IsNumber()
  @IsNotEmpty()
  ValorPagado: number;

  @IsString()
  Observacion: string;  
}


