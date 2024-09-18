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
const Semana1_1 = require("./Semana1");
(0, Semana1_1.BuscarPacienteCB)(1, (error, BuscarP) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log("El paciente es", BuscarP === null || BuscarP === void 0 ? void 0 : BuscarP.Nombre);
});
(0, Semana1_1.BuscarTipoExamenCB)(1, (error, BuscarT) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log("El tipo de examen es", BuscarT === null || BuscarT === void 0 ? void 0 : BuscarT.Descripcion);
});
(0, Semana1_1.BuscarResultadoCB)(1, (error, BuscarR) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log("El resultado es", BuscarR === null || BuscarR === void 0 ? void 0 : BuscarR.ResultadosE);
});
const Semana1_2 = require("./Semana1");
(0, Semana1_2.BuscarPacientePromise)(1)
    .then(paciente => {
    console.log("Paciente encontrado:", paciente);
    return (0, Semana1_2.BuscarResultadoPromise)(paciente.id);
})
    .then(resultado => {
    console.log("Resultado encontrado:", resultado);
    return (0, Semana1_2.BuscarTipoExamenPromise)(resultado.idTipoExamen);
})
    .then(tipoExamen => {
    console.log("Tipo de examen encontrado:", tipoExamen);
})
    .catch(error => {
    console.error("Error:", error.message);
});
const Semana1_3 = require("./Semana1");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const paciente = yield (0, Semana1_3.BuscarPacienteAsync)(1);
            console.log("Paciente encontrado:", paciente);
            const resultado = yield (0, Semana1_3.BuscarResultadoAsync)(paciente.id);
            console.log("Resultado encontrado:", resultado);
            const tipoExamen = yield (0, Semana1_3.BuscarTipoExamenAsync)(resultado.idTipoExamen);
            console.log("Tipo de examen encontrado:", tipoExamen);
        }
        catch (error) {
            console.error(error);
        }
    });
}
main();
const Semana1_4 = require("./Semana1");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, Semana1_4.fetchData)('https://reqres.in/api/users?page=2');
        console.log(response);
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}))();
