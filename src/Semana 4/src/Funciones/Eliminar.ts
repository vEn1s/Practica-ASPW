// import { AppDataSource } from '../data-source';
// import { Paciente, Resultado, TipoExamen } from '../entity/User';

// // Inicializar la conexión
// AppDataSource.initialize().catch(error => console.log("Error al conectar con la base de datos:", error));

// // Función para eliminar un Paciente
// async function EliminarPaciente(id: number) {
//     const pacienteRepository = AppDataSource.getRepository(Paciente);
//     const paciente = await pacienteRepository.findOneBy({ ID: id });

//     if (paciente) {
//         await pacienteRepository.remove(paciente);
//         console.log("Paciente eliminado:", paciente);
//     } else {
//         console.error("Paciente no encontrado");
//     }
// }

// // Función para eliminar un Resultado
// async function EliminarResultado(id: number) {
//     const resultadoRepository = AppDataSource.getRepository(Resultado);
//     const resultado = await resultadoRepository.findOneBy({ ID: id });

//     if (resultado) {
//         await resultadoRepository.remove(resultado);
//         console.log("Resultado eliminado:", resultado);
//     } else {
//         console.error("Resultado no encontrado");
//     }
// }

// // Función para eliminar un TipoExamen
// async function EliminarTipoExamen(id: number) {
//     const tipoExamenRepository = AppDataSource.getRepository(TipoExamen);
//     const tipoExamen = await tipoExamenRepository.findOneBy({ ID: id });

//     if (tipoExamen) {
//         await tipoExamenRepository.remove(tipoExamen);
//         console.log("TipoExamen eliminado:", tipoExamen);
//     } else {
//         console.error("TipoExamen no encontrado");
//     }
// }

// export { EliminarPaciente, EliminarResultado, EliminarTipoExamen };