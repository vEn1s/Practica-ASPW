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
require("reflect-metadata");
// import { AppDataSource } from "../Semana 4/src/data-source";
const src_1 = require("./src");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, src_1.IngresarDatosP)(123, "asd");
            yield (0, src_1.IngresarDatosTP)("asd", "asd");
            yield (0, src_1.IngresarDatosR)(1, 2, "Good", 10, "Sano");
        }
        catch (error) {
            console.error("error en el proceso", error);
        }
    });
}
// import { BuscarPaciente, BuscarTipoExamen, BuscarResultado } from "./src"; 
// async function main() {
//     try {
//         await AppDataSource.initialize();
//         const paciente = await BuscarPaciente(1); 
//         console.log("Paciente encontrado:", paciente);
//         if (paciente) {
//             const resultado = await BuscarResultado(paciente.ID); 
//             console.log("Resultado encontrado:", resultado);
//             if (resultado) {
//                 const tipoExamen = await BuscarTipoExamen(resultado.ID_TipoExamen); 
//                 console.log("Tipo de examen encontrado:", tipoExamen);
//             } else {
//                 console.log("No se encontró resultado para el paciente.");
//             }
//         } else {
//             console.log("No se encontró paciente con el ID proporcionado.");
//         }
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// main();
