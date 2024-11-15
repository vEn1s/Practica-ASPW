import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Resultado } from "src/resultados/entities/resultado.entity";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class TipoExamen {
    @Field(()=> ID)
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Field(()=> String)
    @Column()
    Descripcion: string;

    @Field(()=> String)
    @Column()
    Indicaciones: string;

    @OneToMany(() => Resultado, resultado => resultado.tipoExamen)
    resultados: Resultado[];
}