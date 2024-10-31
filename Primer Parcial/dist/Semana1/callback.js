"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarPacienteCB = BuscarPacienteCB;
exports.BuscarTipoExamenCB = BuscarTipoExamenCB;
exports.BuscarResultadoCB = BuscarResultadoCB;
const interface_1 = require("./interface");
function BuscarPacienteCB(id, callback) {
    const ResultP = interface_1.Pacientes.find(P => P.id === id);
    if (!ResultP) {
        callback(new Error("Mensaje Error"));
        return;
    }
    callback(null, ResultP);
}
function BuscarTipoExamenCB(id, callback) {
    const ResultT = interface_1.TipoExamen.find(T => T.id === id);
    if (!ResultT) {
        callback(new Error("Mensaje Error"));
        return;
    }
    callback(null, ResultT);
}
function BuscarResultadoCB(id, callback) {
    const ResultR = interface_1.Resultados.find(R => R.id === id);
    if (!ResultR) {
        callback(new Error("Mensaje Error"));
        return;
    }
    callback(null, ResultR);
}
