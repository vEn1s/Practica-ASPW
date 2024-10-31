import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Entorno {
    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    Descripcion: string;
}