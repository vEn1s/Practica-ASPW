import "reflect-metadata"
import { DataSource } from "typeorm"
import { Paciente } from "./entity/Paciente"
import { Resultado} from "./entity/Resultado";
import {  TipoExamen} from "./entity/TipoResultado";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "practica1",
    synchronize: true,
    logging: false,
    entities: [ TipoExamen, Resultado, Paciente],
    migrations: [],
    subscribers: [],
})
