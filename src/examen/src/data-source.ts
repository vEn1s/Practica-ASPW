import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User"
import { Paciente } from "./entity/Paciente"
import { Resultado} from "./entity/Resultado";
import {  TipoExamen} from "./entity/TipoResultado";
import { Entorno } from "./entity/Entorno"
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "examen",
    synchronize: true,
    logging: false,
    entities: [TipoExamen, Resultado, Paciente, Entorno],
    migrations: [],
    subscribers: [],
})
