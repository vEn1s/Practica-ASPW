import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
class Paciente{
    @PrimaryGeneratedColumn()
    ID:number

    @Column()
    Nombre:string

    @Column()
    Identificacion:number 
} 
@Entity() 
class TipoExamen{
    @PrimaryGeneratedColumn()
    ID:number

    @Column()
    Descripcion:string

    @Column()
    Indicaciones:string
}

@Entity()
class Resultado{
    @PrimaryGeneratedColumn()
    ID:number

    @Column()
    ID_Paciente:number

    @Column()
    ID_TipoExamen:number

    @Column()
    Resultado:string

    @Column()
    ValorPagado:number

    @Column()
    Observacion:string

}

export{Paciente,Resultado,TipoExamen}