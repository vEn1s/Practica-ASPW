// import { AppDataSource } from "../data-source";
// import { TipoExamen, Paciente, Resultado } from "../entity/User";


// async function BuscarPaciente(id: number) {
//     try {
//         await AppDataSource.initialize();
//         const paciente = await AppDataSource.manager.findOne(Paciente, { where: { ID: id } });
//         console.log("Paciente encontrado: ", paciente);
//         return paciente;
//     } catch (error) {
//         console.error("Error al buscar paciente por ID: ", error);
//     }
// }


// async function BuscarTipoExamen(id: number) {
//     try {
//         await AppDataSource.initialize();
//         const tipoExamen = await AppDataSource.manager.findOne(TipoExamen, { where: { ID: id } });
//         console.log("Tipo de examen encontrado: ", tipoExamen);
//         return tipoExamen;
//     } catch (error) {
//         console.error("Error al buscar tipo de examen por ID: ", error);
//     }
// }


// async function BuscarResultado(id: number) {
//     try {
//         await AppDataSource.initialize();
//         const resultado = await AppDataSource.manager.findOne(Resultado, { where: { ID: id } });
//         console.log("Resultado encontrado: ", resultado);
//         return resultado;
//     } catch (error) {
//         console.error("Error al buscar resultado por ID: ", error);
//     }
// }

// export { BuscarPaciente, BuscarTipoExamen, BuscarResultado };
