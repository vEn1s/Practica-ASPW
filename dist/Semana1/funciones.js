"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./interface");
function RecorrerPersona(pacientes) {
    for (const paciente of pacientes) {
        console.log(`ID: ${paciente.id} Nombre: ${paciente.Nombre} Identificacion: ${paciente.Identificacion} `);
    }
}
function RecorrerTipoEx(Examen) {
    for (const examenes of Examen) {
        console.log(`ID: ${examenes.id} Descripcion: ${examenes.Descripcion} Indicaciones: ${examenes.Indicaciones}  `);
    }
}
function RecorrerResultados(Result) {
    for (const results of Result) {
        console.log(`ID: ${results.id} ID Paciente: ${results.idPaciente} ID Tipo de examen: ${results.idTipoExamen} Resultados Examenes: ${results.ResultadosE} Valor a pagar $:${results.ValorP} Observaciones ${results.Observaciones}`);
    }
}
console.log("La lista de los pacientes son: \n");
RecorrerPersona(interface_1.Pacientes);
console.log("\n La lista de los examenes son:\n ");
RecorrerTipoEx(interface_1.TipoExamen);
console.log(" \n La lista de los resultados son: \n");
RecorrerResultados(interface_1.Resultados);
