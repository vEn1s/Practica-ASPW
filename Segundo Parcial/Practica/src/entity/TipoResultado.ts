import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Resultado} from "./Resultado";

@Entity()
export class TipoExamen {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Descripcion: string;

    @Column()
    Indicaciones: string;

    @OneToMany(() => Resultado, resultado => resultado.tipoExamen)
    resultados: Resultado[];
}

