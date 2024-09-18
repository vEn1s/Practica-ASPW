import "reflect-metadata"
import { DataSource } from "typeorm"
import { Paciente, Resultado, TipoExamen } from "./entity/User"

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
