import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { TipoExamen } from '../entity/TipoResultado';

const routerTipoExamen = Router();
const TipoExamenRepository = AppDataSource.getRepository(TipoExamen);

routerTipoExamen.get('/tipoexamen', async (req, res) => {
  try {
    const tipoExamenes = await TipoExamenRepository.find();
    res.status(200).json(tipoExamenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los tipos de examen', error: error.message });
  }
});

routerTipoExamen.get('/tipoexamen/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const tipoExamen = await TipoExamenRepository.findOne({ where: { ID: parseInt(id) } });

    if (!tipoExamen) {
      return res.status(404).json({ message: 'Tipo de examen no encontrado' });
    }

    res.status(200).json(tipoExamen);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el tipo de examen', error: error.message });
  }
});

routerTipoExamen.post('/', async (req, res) => {
  const { Descripcion, Indicaciones } = req.body;

  try {
    const nuevoTipoExamen = await TipoExamenRepository.save({ Descripcion, Indicaciones });
    res.status(201).json(nuevoTipoExamen);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el tipo de examen', error: error.message });
  }
});

routerTipoExamen.patch('/tipoexamen/:id', async (req, res) => {
  const { id } = req.params;
  const { Descripcion, Indicaciones } = req.body;

  if (!Descripcion && !Indicaciones) {
    return res.status(400).json({ message: 'No se proporcionaron valores para actualizar' });
  }

  try {
    const updateFields: Partial<TipoExamen> = {};
    if (Descripcion) updateFields.Descripcion = Descripcion;
    if (Indicaciones) updateFields.Indicaciones = Indicaciones;

    const result = await TipoExamenRepository.update(id, updateFields);

    if (result.affected === 0) {
      return res.status(404).json({ message: 'Tipo de examen no encontrado' });
    }

    const updatedTipoExamen = await TipoExamenRepository.findOne({ where: { ID: parseInt(id) } });

    if (!updatedTipoExamen) {
      return res.status(404).json({ message: 'Tipo de examen no encontrado después de la actualización' });
    }

    res.status(200).json(updatedTipoExamen);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el tipo de examen', error: error.message });
  }
});

routerTipoExamen.delete('/tipoexamen/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const tipoExamen = await TipoExamenRepository.findOne({ where: { ID: parseInt(id) } });

    if (!tipoExamen) {
      return res.status(404).json({ message: 'Tipo de examen no encontrado' });
    }

    await TipoExamenRepository.remove(tipoExamen);
    res.status(200).json({ message: 'Tipo de examen eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el tipo de examen', error: error.message });
  }
});

export default routerTipoExamen;
