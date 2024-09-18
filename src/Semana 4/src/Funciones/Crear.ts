import { initializeDatabase } from "../initializeDatabase";
import { TipoExamen, Paciente, Resultado } from "../entity/User";
import { AppDataSource } from '../data-source';

export async function IngresarDatosP(Identificacion: number, Nombre: string) {
    try {
        await initializeDatabase(); // Inicializa la conexión solo si no está inicializada

        const paciente = new Paciente();
        paciente.Identificacion = Identificacion;
        paciente.Nombre = Nombre;
      
        await AppDataSource.manager.save(paciente);
        console.log("Saved a new paciente with id: " + paciente.ID);
    } catch (error) {
        console.error("Error al guardar el paciente:", error);
    }
}

export async function IngresarDatosR(ID_Paciente: number, ID_TipoExamen: number, Resultadoss: string, ValorPagado: number, Observacion: string) {
    try {
        await initializeDatabase(); // Inicializa la conexión solo si no está inicializada

        const resultado = new Resultado();
        resultado.ID_Paciente = ID_Paciente;
        resultado.ID_TipoExamen = ID_TipoExamen;
        resultado.Resultadoss = Resultadoss; // Asegúrate de que esto coincida con la propiedad en la entidad
        resultado.ValorPagado = ValorPagado;
        resultado.Observacion = Observacion;

        await AppDataSource.manager.save(resultado);
        console.log("Saved a new resultado with id: " + resultado.ID);
    } catch (error) {
        console.error("Error al guardar el resultado:", error);
    }
}

export async function IngresarDatosTP(Descripcion: string, Indicaciones: string) {
    try {
        await initializeDatabase(); // Inicializa la conexión solo si no está inicializada

        const tipoExamen = new TipoExamen();
        tipoExamen.Descripcion = Descripcion;
        tipoExamen.Indicaciones = Indicaciones;
  
        await AppDataSource.manager.save(tipoExamen);
        console.log("Saved a new tipoExamen with id: " + tipoExamen.ID);
    } catch (error) {
        console.error("Error al guardar el tipoExamen:", error);
    }
}
