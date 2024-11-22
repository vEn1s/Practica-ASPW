import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Resultado } from "src/resultado/entities/resultado.entity";
@Entity({ name: 'pacientes' })
export class Paciente {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Nombre: string;

    @Column()
    Identificacion: string;

    @OneToMany(() => Resultado, resultado => resultado.paciente)
    resultados: Resultado[];
}