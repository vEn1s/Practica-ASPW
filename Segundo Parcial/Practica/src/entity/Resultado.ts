import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import {TipoExamen} from "./TipoResultado"
import {Paciente} from "./Paciente";
@Entity()
export class Resultado {
    @PrimaryGeneratedColumn()
    ID: number;
    
    @Column()
    ID_Paciente:number

    @Column()
    ID_TipoExamen:number

    @Column()
    Resultadoss: string;

    @Column()
    ValorPagado: number;

    @Column()
    Observacion: string;

    @ManyToOne(() => Paciente, paciente => paciente.resultados)
    paciente: Paciente;

    @ManyToOne(() => TipoExamen, tipoExamen => tipoExamen.resultados)
    tipoExamen: TipoExamen;
}


