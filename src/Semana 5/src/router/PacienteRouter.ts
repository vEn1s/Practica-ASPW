import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Paciente } from '../entity/Paciente';

async function inicializarBD(){
    await AppDataSource.initialize()
    console.log("Base de datos inicializada.")
}

const routerPaciente = Router();
const PacienteRepository = AppDataSource.getRepository(Paciente);

routerPaciente.get('/paciente', async (req, res) => {
  try {
    const pacientes = await PacienteRepository.find(); 
    res.status(200).json(pacientes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pacientes', error: error.message });
  }
});


routerPaciente.get('/paciente/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const paciente = await PacienteRepository.findOne({ where: { ID: parseInt(id) } }); 

    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    res.status(200).json(paciente);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el paciente', error: error.message });
  }
});

routerPaciente.post('/paciente', async (req, res) => {
  const { Nombre, Identificacion } = req.body;

  try {
    const nuevoPaciente = await PacienteRepository.save({ Nombre, Identificacion });
    res.status(201).json(nuevoPaciente);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el paciente', error: error.message });
  }
});

routerPaciente.patch('/paciente/:id', async (req, res) => {
    const { id } = req.params;
    const { Nombre, Identificacion } = req.body;
  
    if (!Nombre && !Identificacion) {
      return res.status(400).json({ message: 'No se proporcionaron valores para actualizar' });
    }
  
    try {
      const updateFields: Partial<Paciente> = {};
      if (Nombre) updateFields.Nombre = Nombre;
      if (Identificacion) updateFields.Identificacion = Identificacion;
  
      const result = await PacienteRepository.update(id, updateFields);
  
      if (result.affected === 0) {
        return res.status(404).json({ message: 'Paciente no encontrado' });
      }
        const updatedPaciente = await PacienteRepository.findOne({ where: { ID: parseInt(id) } });
  
      if (!updatedPaciente) {
        return res.status(404).json({ message: 'Paciente no encontrado después de la actualización' });
      }
        res.status(200).json(updatedPaciente);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el paciente', error: error.message });
    }
  });
  

routerPaciente.delete('/paciente/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await PacienteRepository.findOne({ where: { ID: parseInt(id) } });

    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    await PacienteRepository.remove(paciente);
    res.status(200).json({ message: 'Paciente eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el paciente', error: error.message });
  }
});

export default routerPaciente;
