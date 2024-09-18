import "reflect-metadata"
// import { AppDataSource } from "../Semana 4/src/data-source";
import { IngresarDatosP, IngresarDatosTP, IngresarDatosR} from "./src";

IngresarDatosP(1234123,"Pedro");
IngresarDatosTP("Examen de Sangre Completa","Ayuno de 8 horas. No consumir alcohol 24 horas antes.")
IngresarDatosR(1,1,"Normal  ", 20, "Examen realizado con exito")


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
