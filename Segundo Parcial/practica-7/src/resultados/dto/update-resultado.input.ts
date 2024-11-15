import { PartialType } from '@nestjs/mapped-types';
import { CreateResultadoDto } from './create-resultado.input'; 
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateResultadoDto extends PartialType(CreateResultadoDto) {
    @Field()
    id:string
}