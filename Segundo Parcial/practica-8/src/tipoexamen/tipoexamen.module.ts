import { Module } from '@nestjs/common';
import { TipoexamenService } from './tipoexamen.service';
import { TipoexamenGateway } from './tipoexamen.gateway';

@Module({
  providers: [TipoexamenGateway, TipoexamenService],
})
export class TipoexamenModule {}
