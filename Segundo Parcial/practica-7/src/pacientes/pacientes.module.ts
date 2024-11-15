import { Module } from '@nestjs/common';
import { PacienteService } from './pacientes.service';
import { PacientesResolver } from './pacientes.resolver';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';

@Module({
  providers: [PacientesResolver, PacienteService],
  imports: [
    TypeOrmModule.forFeature([Paciente]),
  ],
  exports: [PacienteService]
})
export class PacientesModule {}
