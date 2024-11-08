import { Controller, Post, Body, Get, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ResultadoService } from '../service/resultado.service';
import { ResultadoDTO } from '../dto/resultado.dto';
import { Resultado } from '../entity/Resultado';

@Controller('resultados') // Esta es la ruta base
export class ResultadoController {
    constructor(private readonly resultadoService: ResultadoService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true })) // Validación automática de DTOs
    async crearResultado(@Body() resultadoDTO: ResultadoDTO): Promise<Resultado> {
        return await this.resultadoService.crearResultado(resultadoDTO);
    }

    @Get()
    async obtenerResultados(): Promise<Resultado[]> {
        return await this.resultadoService.findAll();
    }

    @Get(':id')
    async obtenerResultado(@Param('id') id: number): Promise<Resultado> {
        return await this.resultadoService.findById(id);
    }

    @Put(':id')
    async actualizarResultado(@Param('id') id: number, @Body() resultadoDTO: ResultadoDTO): Promise<Resultado> {
        return await this.resultadoService.update(id, resultadoDTO);
    }

    @Delete(':id')
    async eliminarResultado(@Param('id') id: number): Promise<void> {
        return await this.resultadoService.delete(id);
    }
}
