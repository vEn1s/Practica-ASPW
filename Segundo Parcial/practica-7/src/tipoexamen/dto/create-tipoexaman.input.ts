import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateTipoExamenDto {
  @Field(()=>String)
  @IsString()
  Descripcion: string;

  @Field(()=>String)
  @IsString()
  Indicaciones: string;
}