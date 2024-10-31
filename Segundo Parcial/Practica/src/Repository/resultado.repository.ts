import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resultado } from '../entity/Resultado';
import { IResultadoRepository } from './resultado.repository.interface';

@Injectable()
export class ResultadoRepository implements IResultadoRepository {
    constructor(
        @InjectRepository(Resultado)
        private readonly resultadoRepo: Repository<Resultado>,
    ) {}

    async findById(id: number): Promise<Resultado | null> {
        return await this.resultadoRepo.findOneBy({ ID: id });
    }

    async create(resultado: Resultado): Promise<Resultado> {
        const newResultado = this.resultadoRepo.create(resultado);
        return await this.resultadoRepo.save(newResultado);
    }

    async update(id: number, resultado: Resultado): Promise<Resultado> {
        await this.resultadoRepo.update(id, resultado);
        return this.findById(id); // Devuelve el resultado actualizado
    }

    async delete(id: number): Promise<void> {
        await this.resultadoRepo.delete(id);
    }

    async findAll(): Promise<Resultado[]> {
        return await this.resultadoRepo.find();
    }
}
