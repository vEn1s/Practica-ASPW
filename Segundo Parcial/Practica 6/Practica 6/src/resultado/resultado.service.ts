import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resultado } from './entities/resultado.entity';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { TipoExamen } from 'src/tipoexamen/entities/tipoexaman.entity';

@Injectable()
export class ResultadoService {
  constructor(
    @InjectRepository(Resultado)
    private readonly resultadoRepository: Repository<Resultado>,
    @InjectRepository(TipoExamen)
    private readonly tipoExamenRepository: Repository<TipoExamen>,
  ) {}

  async create(createResultadoDto: CreateResultadoDto): Promise<Resultado> {
    const { ID_Paciente, ID_TipoExamen, Resultadoss, ValorPagado, Observacion } = createResultadoDto;

    // Buscar el TipoExamen usando el campo 'ID' en vez de 'ID_TipoExamen'
    const tipoExamen = await this.tipoExamenRepository.findOne({
      where: { ID: ID_TipoExamen },
    });

    if (!tipoExamen) {
      throw new NotFoundException('TipoExamen no encontrado');
    }

    const resultado = this.resultadoRepository.create({
      ID_Paciente,
      ID_TipoExamen,
      Resultadoss,
      ValorPagado,
      Observacion,
      tipoExamen, // Relación de TipoExamen
    });

    return this.resultadoRepository.save(resultado);
  }

  // Método findAll agregado
  async findAll(): Promise<Resultado[]> {
    return this.resultadoRepository.find(); // Retorna todos los resultados
  }

  async findOne(id: number): Promise<Resultado> {
    const resultado = await this.resultadoRepository.findOne({
      where: { ID: id },
    });
    if (!resultado) {
      throw new NotFoundException('Resultado no encontrado');
    }
    return resultado;
  }

  async update(id: number, updateResultadoDto: UpdateResultadoDto): Promise<Resultado> {
    const resultado = await this.findOne(id);
    if (!resultado) {
      throw new NotFoundException('Resultado no encontrado');
    }

    const updatedResult = Object.assign(resultado, updateResultadoDto);
    return this.resultadoRepository.save(updatedResult);
  }

  async remove(id: number): Promise<void> {
    const resultado = await this.findOne(id);
    if (!resultado) {
      throw new NotFoundException('Resultado no encontrado');
    }
    await this.resultadoRepository.remove(resultado);
  }
}
