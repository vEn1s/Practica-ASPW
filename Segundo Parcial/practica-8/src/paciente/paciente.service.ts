import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';


const pacientes = [{
  id: 1,
  Nombre: 'Juan',
  Identificacion: '123456789',
},
{
  id: 2,
  Nombre: 'Pedro',
  Identificacion: '123456789',
}]


@Injectable()
export class PacienteService {
  create(createPacienteDto: CreatePacienteDto) {
    pacientes.push(createPacienteDto)
    return createPacienteDto;
  }

  findAll() {
    return pacientes;
  }

  findOne(id: number) {
    pacientes.find(paciente => paciente.id === id)
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return `This action updates a #${id} paciente`;

  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
