import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from './create-paciente.input';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {
    @Field()
    id: string;
}