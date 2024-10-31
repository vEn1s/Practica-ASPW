// resultado.service.ts
import { Injectable } from '@nestjs/common';
import { Resultado } from '../entity/Resultado';
import { ResultadoDTO } from '../dto/resultado.dto';
import { IResultadoRepository } from '../Repository/resultado.repository.interface';

@Injectable()
export class ResultadoService {
    constructor(private readonly resultadoRepository: IResultadoRepository) {}

    async crearResultado(resultadoDTO: ResultadoDTO): Promise<Resultado> {
        // Crea un nuevo objeto Resultado
        const resultado = new Resultado();

        // Asigna los valores desde el DTO
        resultado.ID_Paciente = resultadoDTO.ID_Paciente;
        resultado.ID_TipoExamen = resultadoDTO.ID_TipoExamen;
        resultado.Resultadoss = resultadoDTO.Resultadoss;
        resultado.ValorPagado = resultadoDTO.ValorPagado;
        resultado.Observacion = resultadoDTO.Observacion; // Este puede ser opcional

        return await this.resultadoRepository.create(resultado);
    }

    async findAll(): Promise<Resultado[]> {
        return await this.resultadoRepository.findAll();
    }

    async findById(id: number): Promise<Resultado> {
        return await this.resultadoRepository.findById(id);
    }

    async update(id: number, resultadoDTO: ResultadoDTO): Promise<Resultado> {
        const resultado = await this.findById(id);
        if (!resultado) {
            throw new Error('Resultado no encontrado');
        }

        // Actualiza las propiedades del resultado
        resultado.ID_Paciente = resultadoDTO.ID_Paciente;
        resultado.ID_TipoExamen = resultadoDTO.ID_TipoExamen;
        resultado.Resultadoss = resultadoDTO.Resultadoss;
        resultado.ValorPagado = resultadoDTO.ValorPagado;
        resultado.Observacion = resultadoDTO.Observacion;

        return await this.resultadoRepository.update(id, resultado);
    }

    async delete(id: number): Promise<void> {
        return await this.resultadoRepository.delete(id);
    }
}