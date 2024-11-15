// resultado.module.ts

import { Module } from '@nestjs/common';
import { ResultadoService } from './resultados.service';
import { ResultadosResolver } from './resultados.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultado } from './entities/resultado.entity';
import { TipoexamenModule } from 'src/tipoexamen/tipoexamen.module';

@Module({
  providers: [ResultadoService, ResultadosResolver],
  imports: [
    TypeOrmModule.forFeature([Resultado]),TipoexamenModule
  ],
  exports: [ResultadoService]
})
export class ResultadosModule {}
