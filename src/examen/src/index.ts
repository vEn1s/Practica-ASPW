import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { Paciente } from "./entity/Paciente";
import { TipoExamen } from "./entity/TipoResultado";
import { Resultado } from "./entity/Resultado";
import { Entorno } from "./entity/Entorno";
import { data } from "./data"; 

// async function migrateData() {
//     await AppDataSource.initialize();

//     const desarrollo = new Entorno();
//     desarrollo.Descripcion = "Desarrollo";
//     await AppDataSource.manager.save(desarrollo);

//     const pruebas = new Entorno();
//     pruebas.Descripcion = "Pruebas";
//     await AppDataSource.manager.save(pruebas);

//     const produccion = new Entorno();
//     produccion.Descripcion = "Producción";
//     await AppDataSource.manager.save(produccion);


//     for (const pacienteData of data.pacientes.datos) {
//         const paciente = new Paciente();
//         paciente.Nombre = pacienteData.Nombre;
//         paciente.Identificacion = pacienteData.Identificacion;
//         paciente.entorno = desarrollo; 
//         await AppDataSource.manager.save(paciente);
//     }

//     for (const tipoExamenData of data.tiposExamen.datos) {
//         const tipoExamen = new TipoExamen();
//         tipoExamen.Descripcion = tipoExamenData.Descripcion;
//         tipoExamen.Indicaciones = tipoExamenData.Indicaciones;
//         tipoExamen.entorno = desarrollo; 
//         await AppDataSource.manager.save(tipoExamen);
//     }

//     // Insertar Resultados
//     const pacientes = await AppDataSource.manager.find(Paciente);
//     const tiposExamen = await AppDataSource.manager.find(TipoExamen);

//     for (let i = 0; i < data.resultados.datos.length; i++) {
//         const resultadoData = data.resultados.datos[i];
//         const resultado = new Resultado();
//         resultado.ID_Paciente = pacientes[i % pacientes.length].ID;
//         resultado.ID_TipoExamen = tiposExamen[i % tiposExamen.length].ID;
//         resultado.Resultadoss = resultadoData.Resultadoss;
//         resultado.ValorPagado = resultadoData.ValorPagado;
//         resultado.Observacion = resultadoData.Observacion;
//         resultado.paciente = pacientes[i % pacientes.length];
//         resultado.tipoExamen = tiposExamen[i % tiposExamen.length];
//         resultado.entorno = desarrollo; 
//         await AppDataSource.manager.save(resultado);
//     }

//     console.log("Datos migrados exitosamente");
// }

// migrateData().catch(error => console.log(error));





// const app = express();
// app.use(express.json());

// AppDataSource.initialize().then(() => {
//     console.log("Data Source has been initialized!");

//     app.put("/update-entorno", async (req, res) => {
//         const { entidad, elementoId, entornoId } = req.body;

//         try {
//             const entorno = await AppDataSource.manager.findOneBy(Entorno, { ID: entornoId });
//             if (!entorno) {
//                 return res.status(404).json({ message: "Entorno no encontrado" });
//             }

//             let entity;
//             switch (entidad) {
//                 case "Paciente":
//                     entity = await AppDataSource.manager.findOneBy(Paciente, { ID: elementoId });
//                     if (entity) {
//                         entity.entorno = entorno;
//                         await AppDataSource.manager.save(entity);
//                     }
//                     break;
//                 case "TipoExamen":
//                     entity = await AppDataSource.manager.findOneBy(TipoExamen, { ID: elementoId });
//                     if (entity) {
//                         entity.entorno = entorno;
//                         await AppDataSource.manager.save(entity);
//                     }
//                     break;
//                 case "Resultado":
//                     entity = await AppDataSource.manager.findOneBy(Resultado, { ID: elementoId });
//                     if (entity) {
//                         entity.entorno = entorno;
//                         await AppDataSource.manager.save(entity);
//                     }
//                     break;
//                 default:
//                     return res.status(400).json({ message: "Entidad no válida" });
//             }

//             if (!entity) {
//                 return res.status(404).json({ message: "Elemento no encontrado" });
//             }

//             res.json({ message: "Entorno actualizado correctamente" });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: "Error al actualizar el entorno" });
//         }
//     });

//     app.listen(3000, () => {
//         console.log("Server is running on port 3000");
//     });
// }).catch((error) => console.log(error));


async function actualizarFases() {
    try {
        // IDs de los entornos
        const entornoDesarrolloId = 4;
        const entornoPruebasId = 5;

        // Obtener los entornos de Desarrollo y Pruebas
        const entornoDesarrollo = await AppDataSource.manager.findOneBy(Entorno, { ID: entornoDesarrolloId });
        const entornoPruebas = await AppDataSource.manager.findOneBy(Entorno, { ID: entornoPruebasId });

        if (!entornoDesarrollo || !entornoPruebas) {
            throw new Error("Entornos de Desarrollo o Pruebas no encontrados");
        }

        console.log("Entorno Desarrollo:", entornoDesarrollo);
        console.log("Entorno Pruebas:", entornoPruebas);

        // Actualizar elementos en fase de Desarrollo a fase de Pruebas
        const updateDesarrolloToPruebas = await AppDataSource.manager.createQueryBuilder()
            .update(Resultado)
            .set({ id: entornoPruebasId })
            .where("id = :id", { id: entornoDesarrolloId })
            .execute();

        console.log("Actualizados de Desarrollo a Pruebas:", updateDesarrolloToPruebas.affected);

        // Actualizar elementos en fase de Pruebas a fase de Desarrollo
        const updatePruebasToDesarrollo = await AppDataSource.manager.createQueryBuilder()
            .update(Resultado)
            .set({ id: entornoDesarrolloId })
            .where("id = :id", { id: entornoPruebasId })
            .execute();

        console.log("Actualizados de Pruebas a Desarrollo:", updatePruebasToDesarrollo.affected);

        // Contar los nuevos números de elementos en cada fase
        const numDesarrollo = await AppDataSource.manager.count(Resultado, { where: { ID: entornoDesarrolloId } });
        const numPruebas = await AppDataSource.manager.count(Resultado, { where: { ID: entornoPruebasId } });

        return {
            numDesarrollo,
            numPruebas
        };
    } catch (error) {
        console.error("Error al actualizar las fases:", error);
        throw error;
    }
}

// Inicializar TypeORM y luego llamar a la función
AppDataSource.initialize().then(() => {
    actualizarFases().then(result => {
        console.log("Nuevos números de elementos:");
        console.log("Fase de Desarrollo:", result.numDesarrollo);
        console.log("Fase de Pruebas:", result.numPruebas);
    }).catch(error => {
        console.error("Error:", error);
    });
}).catch(error => {
    console.error("Error al inicializar la base de datos:", error);
});