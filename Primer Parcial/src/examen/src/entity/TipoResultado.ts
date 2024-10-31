import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Resultado } from "./Resultado";
import { Entorno } from "./Entorno";

@Entity()
export class TipoExamen {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Descripcion: string;

    @Column()
    Indicaciones: string;

    @ManyToOne(() => Entorno)
    entorno: Entorno;

    @OneToMany(() => Resultado, resultado => resultado.tipoExamen)
    resultados: Resultado[];
}