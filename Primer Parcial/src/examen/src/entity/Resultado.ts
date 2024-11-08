import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Paciente } from "./Paciente";
import { TipoExamen } from "./TipoResultado";
import { Entorno } from "./Entorno";

@Entity()
export class Resultado {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    ID_Paciente: number;

    @Column()
    ID_TipoExamen: number;

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

    @ManyToOne(() => Entorno)
    entorno: Entorno;
}