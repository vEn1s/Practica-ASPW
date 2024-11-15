import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsString, IsNotEmpty, IsNumber } from 'class-validator';

@InputType()
export class CreateResultadoDto {
  @Field(() => Number)
  @IsInt()
  @IsNotEmpty()
  ID_Paciente: number;

  @Field(() => Number)
  @IsInt()
  @IsNotEmpty()
  ID_TipoExamen: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  Resultadoss: string;  

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  ValorPagado: number;

  @Field(() => String)
  @IsString()
  Observacion: string;  
}