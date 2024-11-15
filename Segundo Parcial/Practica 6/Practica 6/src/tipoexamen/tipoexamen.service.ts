import { Injectable } from '@nestjs/common';
import { CreateTipoExamenDto } from './dto/create-tipoexaman.dto';
import { UpdateTipoexamanDto } from './dto/update-tipoexaman.dto';

@Injectable()
export class TipoexamenService {
  create(createTipoexamanDto: CreateTipoExamenDto) {
    return 'This action adds a new tipoexaman';
  }

  findAll() {
    return `This action returns all tipoexamen`;
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
