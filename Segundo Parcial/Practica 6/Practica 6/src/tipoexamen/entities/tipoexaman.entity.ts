import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Resultado} from "src/resultado/entities/resultado.entity";

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
