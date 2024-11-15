import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteDto: CreatePacienteDto) {
    const paciente = this.pacienteRepository.create(createPacienteDto);
    return this.pacienteRepository.save(paciente);
  }

  async findAll() {
    return this.pacienteRepository.find();
  }

  async findOne(id: number) {
    return this.pacienteRepository.findOne({
      where: { ID: id },  
    });
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    await this.pacienteRepository.update(id, updatePacienteDto);
    return this.pacienteRepository.findOne({
      where: { ID: id }, 
    });
  }

  async remove(id: number) {
    const paciente = await this.pacienteRepository.findOne({where: {ID: id}});
    await this.pacienteRepository.remove(paciente);
    return paciente;
  }
}
