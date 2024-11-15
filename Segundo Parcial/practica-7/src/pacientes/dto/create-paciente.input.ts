import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsInt } from 'class-validator';

@InputType()
export class CreatePacienteDto {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  Nombre: string;

  @Field(() => Number)
  @IsInt()
  @IsNotEmpty()
  Identificacion: number;
}