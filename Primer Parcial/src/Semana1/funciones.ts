import {IPaciente, ITipoExamen, IResultado, Pacientes, TipoExamen, Resultados} from "./interface";

function RecorrerPersona(pacientes: IPaciente[]): void {
    for (const paciente of pacientes) {
        console.log(`ID: ${paciente.id} Nombre: ${paciente.Nombre} Identificacion: ${paciente.Identificacion} `);
    }
}

function RecorrerTipoEx(Examen:ITipoExamen[]):void {
    for (const examenes of Examen) {
        console.log(`ID: ${examenes.id} Descripcion: ${examenes.Descripcion} Indicaciones: ${examenes.Indicaciones}  `);
    }      
    }


function RecorrerResultados(Result:IResultado[]):void{
    for (const results of Result) {
        console.log(`ID: ${results.id} ID Paciente: ${results.idPaciente} ID Tipo de examen: ${results.idTipoExamen} Resultados Examenes: ${results.ResultadosE} Valor a pagar $:${results.ValorP} Observaciones ${results.Observaciones}`)
    }
}
console.log("La lista de los pacientes son: \n")
RecorrerPersona(Pacientes)
console.log("\n La lista de los examenes son:\n ")
RecorrerTipoEx(TipoExamen) 
console.log(" \n La lista de los resultados son: \n")
RecorrerResultados(Resultados)