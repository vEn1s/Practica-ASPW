import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultadoService } from './resultado.service';
import { ResultadoController } from './resultado.controller';
import { Resultado } from './entities/resultado.entity'; // Ajusta la ruta si es necesario
import { Paciente } from 'src/paciente/entities/paciente.entity'; // Ajusta la ruta si es necesario
import { TipoExamen } from 'src/tipoexamen/entities/tipoexaman.entity'; // Ajusta la ruta si es necesario

@Module({
  imports: [ // Asegúrate de importar TypeOrmModule para las entidades necesarias
    TypeOrmModule.forFeature([Resultado, Paciente, TipoExamen]),
  ],
  controllers: [ResultadoController],
  providers: [ResultadoService],
})
export class ResultadoModule {}
