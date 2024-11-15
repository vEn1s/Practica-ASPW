import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { ResultadoModule } from './resultado/resultado.module';
import { TipoexamenModule } from './tipoexamen/tipoexamen.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Paciente } from './paciente/entities/paciente.entity';
import { Resultado } from './resultado/entities/resultado.entity';
import { TipoExamen } from './tipoexamen/entities/tipoexaman.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: '', 
      database: 'practica6', 
      entities: [Paciente, Resultado, TipoExamen],
      synchronize: true,
      
    }),
    TypeOrmModule.forFeature([Paciente, Resultado, TipoExamen]),
    PacienteModule,
    ResultadoModule,
    TipoexamenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
