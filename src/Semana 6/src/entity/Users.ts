import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    ID: number

    @Column()  
    Nombre: string

    @Column()
    Clave: string

    @Column()
    Estado: string

}