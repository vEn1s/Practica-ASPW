import { Injectable } from '@nestjs/common';
import { CreateTipoexamanDto } from './dto/create-tipoexaman.dto';
import { UpdateTipoexamanDto } from './dto/update-tipoexaman.dto';

const tipoexamen = [{
  id: 1,
  Descripcion: 'Descripcion del tipo de examen 1',
  Indicaciones: 'Tipo de examen 1',
},
{
  id: 2,
  Descripcion: 'Descripcion del tipo de examen 2',
  Indicaciones: 'Tipo de examen 2',
}]

@Injectable()
export class TipoexamenService {
  create(createTipoexamanDto: CreateTipoexamanDto) {
    tipoexamen.push(createTipoexamanDto);
    return createTipoexamanDto;
  }

  findAll() {
    return tipoexamen;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoexaman`;
  }

  update(id: number, updateTipoexamanDto: UpdateTipoexamanDto) {
    return `This action updates a #${id} tipoexaman`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoexaman`;
  }
}
