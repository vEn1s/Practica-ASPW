import {IPaciente, ITipoExamen, IResultado, Pacientes, TipoExamen, Resultados} from "./interface"

function BuscarPacienteCB(id: number, callback: (error: Error | null, BuscarP?: IPaciente) => void){
    const ResultP= Pacientes.find(P=> P.id===id)
    if(!ResultP){
        callback(new Error("Mensaje Error"))
        return
    }
    callback(null, ResultP)
}

function BuscarTipoExamenCB(id: number, callback: (error: Error | null, BuscarT?: ITipoExamen) => void){
    const ResultT= TipoExamen.find(T=> T.id===id)
    if(!ResultT){
        callback(new Error("Mensaje Error"))
        return
    }
    callback(null, ResultT)
}

function BuscarResultadoCB(id: number, callback: (error: Error | null, BuscarR?: IResultado) => void){
    const ResultR= Resultados.find(R=> R.id===id)
    if(!ResultR){
        callback(new Error("Mensaje Error"))
        return
    }
    callback(null, ResultR)
}


export {BuscarPacienteCB, BuscarTipoExamenCB, BuscarResultadoCB}