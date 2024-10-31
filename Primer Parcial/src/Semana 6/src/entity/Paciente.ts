import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"
import { Resultado } from "./Resultado";

@Entity()
export class Paciente{
    @PrimaryGeneratedColumn()
    ID: number

    @Column()
    Nombre: string

    @Column()
    Identificacion: string

    @OneToMany(() => Resultado, resultado => resultado.paciente)
    resultados: Resultado[];

}