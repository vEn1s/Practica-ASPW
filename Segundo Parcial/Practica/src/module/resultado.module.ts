import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resultado } from '../entity/Resultado';
import { ResultadoController } from '../controller/resultado.controller';
import { ResultadoService } from '../service/resultado.service';
import { ResultadoRepository } from '../Repository/resultado.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Resultado])],
    controllers: [ResultadoController],
    providers: [ResultadoService, ResultadoRepository],
})
export class ResultadoModule {}
