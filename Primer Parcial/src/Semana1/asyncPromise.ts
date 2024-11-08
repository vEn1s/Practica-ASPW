import { IPaciente, ITipoExamen, IResultado, Pacientes, TipoExamen, Resultados } from "./interface";

//USANDO ASYNC

async function BuscarPacienteAsync(id: number): Promise<IPaciente> {
    const ResultP = Pacientes.find(P => P.id === id);
    if (!ResultP) {
        throw new Error("Mensaje Error: Paciente no encontrado");
    }
    return ResultP;
}

async function BuscarTipoExamenAsync(id: number): Promise<ITipoExamen> {
    const ResultT = TipoExamen.find(T => T.id === id);
    if (!ResultT) {
        throw new Error("Mensaje Error: Tipo de examen no encontrado");
    }
    return ResultT;
}

async function BuscarResultadoAsync(id: number): Promise<IResultado> {
    const ResultR = Resultados.find(R => R.id === id);
    if (!ResultR) {
        throw new Error("Mensaje Error: Resultado no encontrado");
    }
    return ResultR;
}


// USANDO PROMISE

function BuscarPacientePromise(id: number): Promise<IPaciente> {
    return new Promise((resolve, reject) => {
        const ResultP = Pacientes.find(P => P.id === id);
        if (!ResultP) {
            reject(new Error("Mensaje Error: Paciente no encontrado"));
        } else {
            resolve(ResultP);
        }
    });
}

function BuscarTipoExamenPromise(id: number): Promise<ITipoExamen> {
    return new Promise((resolve, reject) => {
        const ResultT = TipoExamen.find(T => T.id === id);
        if (!ResultT) {
            reject(new Error("Mensaje Error: Tipo de examen no encontrado"));
        } else {
            resolve(ResultT);
        }
    });
}

function BuscarResultadoPromise(id: number): Promise<IResultado> {
    return new Promise((resolve, reject) => {
        const ResultR = Resultados.find(R => R.id === id);
        if (!ResultR) {
            reject(new Error("Mensaje Error: Resultado no encontrado"));
        } else {
            resolve(ResultR);
        }
    });
}

export { BuscarPacientePromise, BuscarTipoExamenPromise, BuscarResultadoPromise };


export { BuscarPacienteAsync, BuscarTipoExamenAsync, BuscarResultadoAsync };
