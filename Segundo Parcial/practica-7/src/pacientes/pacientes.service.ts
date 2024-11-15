import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePacienteDto } from './dto/create-paciente.input'; 
import { UpdatePacienteDto } from './dto/update-paciente.input'; 
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = this.pacienteRepository.create(createPacienteDto);
    return this.pacienteRepository.save(paciente);
  }

  async findAll() : Promise<Paciente[]> {
    return this.pacienteRepository.find();
  }

  async findOne(id: string): Promise<Paciente> {
    return this.pacienteRepository.findOne({
      where: { ID: id },  
    });
  }

  async update(id: string, updatePacienteDto: UpdatePacienteDto): Promise<Paciente> {
    await this.pacienteRepository.update(id, updatePacienteDto);
    return this.pacienteRepository.findOne({
      where: { ID: id }, 
    });
  }

  async remove(id: string): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({where: {ID: id}});
    await this.pacienteRepository.remove(paciente);
    return paciente;
  }
}