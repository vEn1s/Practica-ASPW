import {Router} from 'express';
import { AppDataSource } from '../data-source';
import { Paciente } from '../entity/Paciente';   

async function InitializeDB(){
    await AppDataSource.initialize()
    console.log("Database initialized")
}

const routerPacientes=Router()
const PacienteRepository=AppDataSource.getRepository(Paciente)

routerPacientes.get('/', async (req, res)=>{
    try{
        const pacientes=await PacienteRepository.find()
        res.json(pacientes)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

routerPacientes.get('/:id', async (req, res)=>{
    const {id}=req.params
    try{
        const paciente=await PacienteRepository.findOne(id)
        res.json(paciente)
    }catch(error){  
        res.status(500).json({message:error.message})
    }
})


routerPacientes.post('/', async (req, res)=>{
    const {Nombre, Identificacion}=req.body
    try{
        const paciente=PacienteRepository.create({Nombre, Identificacion})
        await PacienteRepository.save(paciente)
        res.json(paciente)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

routerPacientes.patch('/:id', async (req, res) => {
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
  
export default routerPacientes