import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { TipoExamen } from "src/tipoexamen/entities/tipoexaman.entity"; 
import { Paciente } from "src/pacientes/entities/paciente.entity"; 
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity({ name: 'resultados' })
export class Resultado {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    ID: string;

    @Field(() => Number)
    @Column()
    ID_Paciente:number

    @Field(() => Number)
    @Column()
    ID_TipoExamen:number

    @Field(() => String)
    @Column()
    Resultadoss: string;

    @Field(() => Number)
    @Column()
    ValorPagado: number;

    @Field(() => String)
    @Column()
    Observacion: string;

    @ManyToOne(() => Paciente, paciente => paciente.resultados)
    paciente: Paciente;

    @ManyToOne(() => TipoExamen, tipoExamen => tipoExamen.resultados)
    tipoExamen: TipoExamen;
}
