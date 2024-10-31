import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Resultado } from '../entity/Resultado';

const routerResultado = Router();
const ResultadoRepository = AppDataSource.getRepository(Resultado);

routerResultado.get('/resultado', async (req, res) => {
  try {
    const resultados = await ResultadoRepository.find();
    res.status(200).json(resultados);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los resultados', error: error.message });
  }
});

routerResultado.get('/resultado/:id', async (req, res) => {
  const { id } = req.params;

  const parsedId = parseInt(id);
  if (isNaN(parsedId)) {
    return res.status(400).json({ message: 'ID inválido' });
  }

  try {
    const resultado = await ResultadoRepository.findOne({ where: { ID: parsedId } });
    if (!resultado) {
      return res.status(404).json({ message: 'Resultado no encontrado' });
    }
    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el resultado', error: error.message });
  }
});

routerResultado.post('/resultado', async (req, res) => {
  const { ID_Paciente, ID_TipoExamen, Resultadoss, ValorPagado, Observacion } = req.body;
  try {
    const nuevoResultado = await ResultadoRepository.save({
      ID_Paciente,
      ID_TipoExamen,
      Resultadoss,
      ValorPagado,
      Observacion,
    });
    res.status(201).json(nuevoResultado);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el resultado', error: error.message });
  }
});

routerResultado.patch('/resultado/:id', async (req, res) => {
  const { id } = req.params;
  const { ID_Paciente, ID_TipoExamen, Resultadoss, ValorPagado, Observacion } = req.body;

  if (!ID_Paciente && !ID_TipoExamen && !Resultadoss && !ValorPagado && !Observacion) {
    return res.status(400).json({ message: 'No se proporcionaron valores para actualizar' });
  }

  try {
    const updateFields: Partial<Resultado> = {};
    if (ID_Paciente) updateFields.ID_Paciente = ID_Paciente;
    if (ID_TipoExamen) updateFields.ID_TipoExamen = ID_TipoExamen;
    if (Resultadoss) updateFields.Resultadoss = Resultadoss;
    if (ValorPagado) updateFields.ValorPagado = ValorPagado;
    if (Observacion) updateFields.Observacion = Observacion;

    const result = await ResultadoRepository.update(id, updateFields);
    if (result.affected === 0) {
      return res.status(404).json({ message: 'Resultado no encontrado' });
    }

    const updatedResultado = await ResultadoRepository.findOne({ where: { ID: parseInt(id) } });
    if (!updatedResultado) {
      return res.status(404).json({ message: 'Resultado no encontrado después de la actualización' });
    }

    res.status(200).json(updatedResultado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el resultado', error: error.message });
  }
});

routerResultado.delete('/resultado/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const resultado = await ResultadoRepository.findOne({ where: { ID: parseInt(id) } });
    if (!resultado) {
      return res.status(404).json({ message: 'Resultado no encontrado' });
    }
    await ResultadoRepository.remove(resultado);
    res.status(200).json({ message: 'Resultado eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el resultado', error: error.message });
  }
});

export default routerResultado;
