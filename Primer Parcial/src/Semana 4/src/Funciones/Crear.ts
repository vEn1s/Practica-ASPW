// import { initializeDatabase } from "../initializeDatabase";
import {  Paciente} from "../entity/Paciente";
import { TipoExamen} from "../entity/TipoResultado";
import {Resultado} from "../entity/Resultado";
import { AppDataSource } from '../data-source';

export async function initializeDataSource() {
    try {
        if (!AppDataSource.isInitialized) {
            await AppDataSource.initialize();
            console.log("Base de datos inicializada.");
        }
    } catch (error) {
        console.error("Error al inicializar base de datos:", error);
    }
}

export async function IngresarDatosP(Identificacion: number, Nombre: string) {
    await initializeDataSource()

        const paciente = new Paciente();
        paciente.Identificacion = Identificacion;
        paciente.Nombre = Nombre;
      
        await AppDataSource.manager.save(paciente);
        console.log("Saved a new paciente with id: " + paciente.ID);

 }


export async function IngresarDatosR(ID_Paciente: number, ID_TipoExamen: number, Resultadoss: string, ValorPagado: number, Observacion: string) {
    
    await initializeDataSource()
        const resultado = new Resultado();
        resultado.ID_Paciente = ID_Paciente;
        resultado.ID_TipoExamen = ID_TipoExamen;
        resultado.Resultadoss = Resultadoss; // Asegúrate de que esto coincida con la propiedad en la entidad
        resultado.ValorPagado = ValorPagado;
        resultado.Observacion = Observacion;

        await AppDataSource.manager.save(resultado);
        console.log("Saved a new resultado with id: " + resultado.ID);
   
    }


export async function IngresarDatosTP(Descripcion: string, Indicaciones: string) {
    await initializeDataSource()

        const tipoExamen = new TipoExamen();
        tipoExamen.Descripcion = Descripcion;
        tipoExamen.Indicaciones = Indicaciones;
  
        await AppDataSource.manager.save(tipoExamen);
        console.log("Saved a new tipoExamen with id: " + tipoExamen.ID);

    }
