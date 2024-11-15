import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Resultado } from 'src/resultado/entities/resultado.entity';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Paciente, Resultado])],
  providers: [PacienteService],
  controllers: [PacienteController],
})
export class PacienteModule {}
