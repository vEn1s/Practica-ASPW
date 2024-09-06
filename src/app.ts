import {BuscarPacienteCB, BuscarTipoExamenCB, BuscarResultadoCB} from "./Semana1"


BuscarPacienteCB(1, (error, BuscarP) => {
    if(error){
        console.error(error);
        return;
    }
    console.log("El paciente es", BuscarP?.Nombre)
})

BuscarTipoExamenCB(1, (error, BuscarT) => {
    if(error){
        console.error(error);
        return;
    }
    console.log("El tipo de examen es", BuscarT?.Descripcion)
})

BuscarResultadoCB(1, (error, BuscarR) => {
    if(error){
        console.error(error);
        return;
    }
    console.log("El resultado es", BuscarR?.ResultadosE)
})

import  {BuscarPacientePromise, BuscarTipoExamenPromise, BuscarResultadoPromise} from

 "./Semana1"


 BuscarPacientePromise(1)
 .then(paciente => {
     console.log("Paciente encontrado:", paciente);
     return BuscarResultadoPromise(paciente.id);
 })
 .then(resultado => {
     console.log("Resultado encontrado:", resultado);
     return BuscarTipoExamenPromise(resultado.idTipoExamen);
 })
 .then(tipoExamen => {
     console.log("Tipo de examen encontrado:", tipoExamen);
 })
 .catch(error => {
     console.error("Error:", error.message);
 });


import {BuscarPacienteAsync, BuscarTipoExamenAsync, BuscarResultadoAsync } from "./Semana1"


async function main() {
    try {
        
        const paciente = await BuscarPacienteAsync(1);
        console.log("Paciente encontrado:", paciente);

        const resultado = await BuscarResultadoAsync(paciente.id);
        console.log("Resultado encontrado:", resultado);

        const tipoExamen = await BuscarTipoExamenAsync(resultado.idTipoExamen);
        console.log("Tipo de examen encontrado:", tipoExamen);

    } catch (error) {
        console.error (error);
    }
}

main();

















