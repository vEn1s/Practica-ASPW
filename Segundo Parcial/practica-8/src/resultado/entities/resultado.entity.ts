import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { TipoExamen } from "src/tipoexamen/entities/tipoexaman.entity"; 
import { Paciente } from "src/paciente/entities/paciente.entity";
@Entity({ name: 'resultados' })
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