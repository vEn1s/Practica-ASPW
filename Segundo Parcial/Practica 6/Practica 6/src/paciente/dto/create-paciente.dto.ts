import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  @IsNotEmpty()
  Nombre: string;

  @IsInt()
  @IsNotEmpty()
  Identificacion: number;
}
