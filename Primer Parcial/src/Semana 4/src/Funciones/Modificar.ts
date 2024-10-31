// import { AppDataSource } from '../data-source';
// import { Paciente, Resultado, TipoExamen } from '../entity/User'


// AppDataSource.initialize().catch(error => console.log("Error al conectar con la base de datos:", error));


// async function ModificarPaciente(id: number, data: Partial<Paciente>) {
//     const pacienteRepository = AppDataSource.getRepository(Paciente);
//     let paciente = await pacienteRepository.findOneBy({ ID: id });

//     if (paciente) {
//         paciente = { ...paciente, ...data };
//         await pacienteRepository.save(paciente);
//         console.log("Paciente modificado:", paciente);
//         return paciente;
//     } else {
//         console.error("Paciente no encontrado");
//         return null;
//     }
// }


// async function ModificarResultado(id: number, data: Partial<Resultado>) {
//     const resultadoRepository = AppDataSource.getRepository(Resultado);
//     let resultado = await resultadoRepository.findOneBy({ ID: id });

//     if (resultado) {
//         resultado = { ...resultado, ...data };
//         await resultadoRepository.save(resultado);
//         console.log("Resultado modificado:", resultado);
//         return resultado;
//     } else {
//         console.error("Resultado no encontrado");
//         return null;
//     }
// }

// async function ModificarTipoExamen(id: number, data: Partial<TipoExamen>) {
//     const tipoExamenRepository = AppDataSource.getRepository(TipoExamen);
//     let tipoExamen = await tipoExamenRepository.findOneBy({ ID: id });

//     if (tipoExamen) {
//         tipoExamen = { ...tipoExamen, ...data };
//         await tipoExamenRepository.save(tipoExamen);
//         console.log("TipoExamen modificado:", tipoExamen);
//         return tipoExamen;
//     } else {
//         console.error("TipoExamen no encontrado");
//         return null;
//     }
// }

// export{ModificarPaciente, ModificarResultado, ModificarTipoExamen}