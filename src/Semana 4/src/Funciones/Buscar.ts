import {  Paciente} from "../entity/Paciente";
import { TipoExamen} from "../entity/TipoResultado";
import {Resultado} from "../entity/Resultado";
import { AppDataSource } from '../data-source';
import {initializeDataSource} from "./Crear"




export async function ConsultaGeneral() {
    await initializeDataSource()
    console.log("Cargando estado General")

    const pacientes = await AppDataSource.manager.find(Paciente);
    console.log("Pacientes: ", pacientes);
    
    const resultados = await AppDataSource.manager.find(Resultado);
    console.log("Resultados: ", resultados);
    
    const tipoExamenes = await AppDataSource.manager.find(TipoExamen);
    console.log("Tipo Examenes: ", tipoExamenes);

}