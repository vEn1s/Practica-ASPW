import { Injectable } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';

const resultado = [{
  ID_Paciente: 1,
  ID_TipoExamen: 1,
  Resultadoss: 'Resultado 1',
  ValorPagado: 100,
  Observacion: 'Observacion 1'
},
{
  ID_Paciente: 2,
  ID_TipoExamen: 2,
  Resultadoss: 'Resultado 2',
  ValorPagado: 200,
  Observacion: 'Observacion 2'
},
{
  ID_Paciente: 3,
  ID_TipoExamen: 3,
  Resultadoss: 'Resultado 3',
  ValorPagado: 300,
  Observacion: 'Observacion 3'
}]

@Injectable()
export class ResultadoService {
  create(createResultadoDto: CreateResultadoDto) {
    return 'This action adds a new resultado';
  }

  findAll() {
    return resultado;
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
