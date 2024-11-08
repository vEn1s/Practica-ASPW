"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "practica1",
    synchronize: true,
    logging: false,
    entities: [User_1.TipoExamen, User_1.Resultado, User_1.Paciente],
    migrations: [],
    subscribers: [],
});
