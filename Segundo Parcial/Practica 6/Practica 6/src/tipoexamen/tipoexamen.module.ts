import { Module } from '@nestjs/common';
import { TipoexamenService } from './tipoexamen.service';
import { TipoexamenController } from './tipoexamen.controller';

@Module({
  controllers: [TipoexamenController],
  providers: [TipoexamenService],
})
export class TipoexamenModule {}
