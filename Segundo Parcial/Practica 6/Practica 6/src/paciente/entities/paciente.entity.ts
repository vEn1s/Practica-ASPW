import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Resultado } from "src/resultado/entities/resultado.entity";
@Entity()
export class Paciente {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Nombre: string;

    @Column()
    Identificacion: number;

    @OneToMany(() => Resultado, resultado => resultado.paciente)
    resultados: Resultado[];
}
