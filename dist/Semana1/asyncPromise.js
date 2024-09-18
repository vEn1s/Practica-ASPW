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
exports.BuscarPacientePromise = BuscarPacientePromise;
exports.BuscarTipoExamenPromise = BuscarTipoExamenPromise;
exports.BuscarResultadoPromise = BuscarResultadoPromise;
exports.BuscarPacienteAsync = BuscarPacienteAsync;
exports.BuscarTipoExamenAsync = BuscarTipoExamenAsync;
exports.BuscarResultadoAsync = BuscarResultadoAsync;
const interface_1 = require("./interface");
//USANDO ASYNC
function BuscarPacienteAsync(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const ResultP = interface_1.Pacientes.find(P => P.id === id);
        if (!ResultP) {
            throw new Error("Mensaje Error: Paciente no encontrado");
        }
        return ResultP;
    });
}
function BuscarTipoExamenAsync(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const ResultT = interface_1.TipoExamen.find(T => T.id === id);
        if (!ResultT) {
            throw new Error("Mensaje Error: Tipo de examen no encontrado");
        }
        return ResultT;
    });
}
function BuscarResultadoAsync(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const ResultR = interface_1.Resultados.find(R => R.id === id);
        if (!ResultR) {
            throw new Error("Mensaje Error: Resultado no encontrado");
        }
        return ResultR;
    });
}
// USANDO PROMISE
function BuscarPacientePromise(id) {
    return new Promise((resolve, reject) => {
        const ResultP = interface_1.Pacientes.find(P => P.id === id);
        if (!ResultP) {
            reject(new Error("Mensaje Error: Paciente no encontrado"));
        }
        else {
            resolve(ResultP);
        }
    });
}
function BuscarTipoExamenPromise(id) {
    return new Promise((resolve, reject) => {
        const ResultT = interface_1.TipoExamen.find(T => T.id === id);
        if (!ResultT) {
            reject(new Error("Mensaje Error: Tipo de examen no encontrado"));
        }
        else {
            resolve(ResultT);
        }
    });
}
function BuscarResultadoPromise(id) {
    return new Promise((resolve, reject) => {
        const ResultR = interface_1.Resultados.find(R => R.id === id);
        if (!ResultR) {
            reject(new Error("Mensaje Error: Resultado no encontrado"));
        }
        else {
            resolve(ResultR);
        }
    });
}
