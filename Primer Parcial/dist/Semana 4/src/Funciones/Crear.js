"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngresarDatosP = IngresarDatosP;
exports.IngresarDatosR = IngresarDatosR;
exports.IngresarDatosTP = IngresarDatosTP;
const initializeDatabase_1 = require("../initializeDatabase");
const User_1 = require("../entity/User");
const data_source_1 = require("../data-source");
function IngresarDatosP(Identificacion, Nombre) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, initializeDatabase_1.initializeDatabase)(); // Inicializa la conexión solo si no está inicializada
            const paciente = new User_1.Paciente();
            paciente.Identificacion = Identificacion;
            paciente.Nombre = Nombre;
            yield data_source_1.AppDataSource.manager.save(paciente);
            console.log("Saved a new paciente with id: " + paciente.ID);
        }
        catch (error) {
            console.error("Error al guardar el paciente:", error);
        }
    });
}
function IngresarDatosR(ID_Paciente, ID_TipoExamen, Resultadoss, ValorPagado, Observacion) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, initializeDatabase_1.initializeDatabase)(); // Inicializa la conexión solo si no está inicializada
            const resultado = new User_1.Resultado();
            resultado.ID_Paciente = ID_Paciente;
            resultado.ID_TipoExamen = ID_TipoExamen;
            resultado.Resultadoss = Resultadoss; // Asegúrate de que esto coincida con la propiedad en la entidad
            resultado.ValorPagado = ValorPagado;
            resultado.Observacion = Observacion;
            yield data_source_1.AppDataSource.manager.save(resultado);
            console.log("Saved a new resultado with id: " + resultado.ID);
        }
        catch (error) {
            console.error("Error al guardar el resultado:", error);
        }
    });
}
function IngresarDatosTP(Descripcion, Indicaciones) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, initializeDatabase_1.initializeDatabase)(); // Inicializa la conexión solo si no está inicializada
            const tipoExamen = new User_1.TipoExamen();
            tipoExamen.Descripcion = Descripcion;
            tipoExamen.Indicaciones = Indicaciones;
            yield data_source_1.AppDataSource.manager.save(tipoExamen);
            console.log("Saved a new tipoExamen with id: " + tipoExamen.ID);
        }
        catch (error) {
            console.error("Error al guardar el tipoExamen:", error);
        }
    });
}
