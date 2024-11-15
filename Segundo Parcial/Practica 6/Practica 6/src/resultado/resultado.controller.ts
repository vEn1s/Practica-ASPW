import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common'; // Asegúrate de tener las importaciones correctas
import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { NotFoundException } from '@nestjs/common';
import { Resultado } from './entities/resultado.entity';

@Controller('resultado')
export class ResultadoController {
  constructor(
    private readonly resultadoService: ResultadoService, // Usa el servicio correctamente
  ) {}

  @Post()
  async create(@Body() createResultadoDto: CreateResultadoDto): Promise<Resultado> {
    const resultado = await this.resultadoService.create(createResultadoDto);
    return resultado; // Devuelve el resultado recién creado con todos sus datos
  }

  @Get()
  async findAll() {
    return this.resultadoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.resultadoService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateResultadoDto: UpdateResultadoDto) {
    return this.resultadoService.update(+id, updateResultadoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.resultadoService.remove(+id);
  }
}
