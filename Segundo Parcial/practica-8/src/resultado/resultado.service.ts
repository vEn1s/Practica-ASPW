import { Injectable } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';

const resultados = [{
  id: 1,
  ID_Paciente: 1,
  ID_TipoExamen: 1,
  Resultadoss: 'Positivo',
  ValorPagado: 100,
  Observacion: 'Ninguna',
},
{
  id: 2,
  ID_Paciente: 2,
  ID_TipoExamen: 2,
  Resultadoss: 'Negativo',
  ValorPagado: 200,
  Observacion: 'Ninguna',
}]
@Injectable()
export class ResultadoService {
  create(createResultadoDto: CreateResultadoDto) {
  resultados.push(createResultadoDto);
  return createResultadoDto
  }

  findAll() {
    return resultados;
  }

  findOne(id: number) {
    return `This action returns a #${id} resultado`;
  }

  update(id: number, updateResultadoDto: UpdateResultadoDto) {
    return `This action updates a #${id} resultado`;
  }

  remove(id: number) {
    return `This action removes a #${id} resultado`;
  }
}
