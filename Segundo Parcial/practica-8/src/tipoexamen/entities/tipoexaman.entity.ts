import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Resultado } from "src/resultado/entities/resultado.entity";

@Entity( {name: 'tipoexamen'} )
export class TipoExamen {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Descripcion: string;

    @Column()
    Indicaciones: string;

    resultados: Resultado[];
}