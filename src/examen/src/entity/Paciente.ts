import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Resultado } from "./Resultado";
import { Entorno } from "./Entorno";

@Entity()
export class Paciente {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Nombre: string;

    @Column()
    Identificacion: number;

    @ManyToOne(() => Entorno)
    entorno: Entorno;

    @OneToMany(() => Resultado, resultado => resultado.paciente)
    resultados: Resultado[];
}