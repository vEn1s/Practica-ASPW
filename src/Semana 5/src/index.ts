import express from 'express';
import { AppDataSource } from './data-source';
import routerResultado from './router/ResultadoRouter';
import routerPaciente from './router/PacienteRouter';
import routerTipoExamen from './router/TipoResultadoRouter';

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
  app.use('/options', routerPaciente);
  app.use('/options', routerResultado);
  app.use('/options', routerTipoExamen); 
  app.listen(3000, () => console.log('Server is running on port 3000!'));
});
