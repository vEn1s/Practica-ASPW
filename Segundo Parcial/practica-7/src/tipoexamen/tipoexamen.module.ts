import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoExamen } from './entities/tipoexaman.entity';
import { TipoexamenService } from './tipoexamen.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoExamen])],
  providers: [TipoexamenService],
  exports: [TypeOrmModule, TipoexamenService], // Exporta el TypeOrmModule y el servicio
})
export class TipoexamenModule {}