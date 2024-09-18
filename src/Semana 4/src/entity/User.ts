import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity()
class Paciente {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Nombre: string;

    @Column()
    Identificacion: number;

    @OneToMany(() => Resultado, resultado => resultado.paciente)
    resultados: Resultado[];
}

@Entity()
class TipoExamen {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Descripcion: string;

    @Column()
    Indicaciones: string;

    @OneToMany(() => Resultado, resultado => resultado.tipoExamen)
    resultados: Resultado[];
}

@Entity()
class Resultado {
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

export { Paciente, Resultado, TipoExamen };
