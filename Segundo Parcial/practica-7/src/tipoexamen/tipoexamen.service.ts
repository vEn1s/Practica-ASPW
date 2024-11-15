import { Injectable } from '@nestjs/common';
import { CreateTipoExamenDto } from './dto/create-tipoexaman.input';
import { UpdateTipoExamenDto } from './dto/update-tipoexaman.input';
import { TipoExamen } from './entities/tipoexaman.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TipoexamenService {
  constructor(
    @InjectRepository(TipoExamen)
    private readonly tipoExamenRepository: Repository<TipoExamen>,
  ) {
    
  }

  async create(createTipoexamanDto: CreateTipoExamenDto): Promise<TipoExamen> {
    const paciente = this.tipoExamenRepository.create(createTipoexamanDto);
    return await this.tipoExamenRepository.save(paciente);
  }

  async findAll(): Promise<TipoExamen[]> {
    return await this.tipoExamenRepository.find();
  }

  async findOne(id: string): Promise<TipoExamen> {
    return await this.tipoExamenRepository.findOne({
      where: { ID: id },  
    });
  }

  async update(id: string, updateTipoexamanDto: UpdateTipoExamenDto):Promise<TipoExamen> {
    const update= await this.tipoExamenRepository.preload(updateTipoexamanDto);
    if (!update) {
      throw new Error(`Tipoexaman with id ${id} not found`);
    }
    return await this.tipoExamenRepository.save(update);
  }

  async remove(id: string): Promise<TipoExamen> {
    const removed= await this.tipoExamenRepository.findOne({where: {ID: id}});
    if (!removed) {
      throw new Error(`Tipoexaman with id ${id} not found`);
    }
    return await this.tipoExamenRepository.remove(removed);
  }
}