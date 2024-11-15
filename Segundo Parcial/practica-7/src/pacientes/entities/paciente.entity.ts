import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { ObjectType, ID, Field } from "@nestjs/graphql";
import { Resultado } from "src/resultados/entities/resultado.entity"

@ObjectType()
@Entity({ name: 'pacientes' })
export class Paciente {

    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Column()
    @Field(() => String)
    Nombre: string;

    @Field(() => Number)
    @Column()
    Identificacion: number;

    @OneToMany(() => Resultado, resultado => resultado.paciente)
    resultados: Resultado[];
}