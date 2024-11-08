import express from 'express';
import { AppDataSource } from './data-source';
import routerResultado from './routers/ResultadoRouter';
import routerPaciente from './routers/PacienteRouter';
import routerTipoExamen from './routers/TipoResultadoRouter';
import routerUsers from './routers/UsersRouter';


const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
  app.use('/paciente', routerPaciente);
  app.use('/resultado', routerResultado);
  app.use('/Examen', routerTipoExamen); 
  app.use('/Users', routerUsers); 
  app.listen(3000, () => console.log('Server is running on port 3000!'));
});
