import { updatePaciente } from './paciente';
import { updateResultado } from './resultado';
import {  deleteTipoExamen} from "./tipoExamen";

async function main() {
 
  await updatePaciente(1, { Nombre: 'Prueba', Identificacion: 123456 });


  await deleteTipoExamen(2);


  await updateResultado(3, { Resultadoss: 'Nuevo resultado', ValorPagado: 200 });
}

main();
