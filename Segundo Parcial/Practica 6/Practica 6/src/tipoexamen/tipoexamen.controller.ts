import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoexamenService } from './tipoexamen.service';
import { CreateTipoExamenDto } from './dto/create-tipoexaman.dto';
import { UpdateTipoexamanDto } from './dto/update-tipoexaman.dto';

@Controller('tipoexamen')
export class TipoexamenController {
  constructor(private readonly tipoexamenService: TipoexamenService) {}

  @Post()
  create(@Body() createTipoexamanDto: CreateTipoExamenDto) {
    return this.tipoexamenService.create(createTipoexamanDto);
  }

  @Get()
  findAll() {
    return this.tipoexamenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoexamenService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoexamanDto: UpdateTipoexamanDto) {
    return this.tipoexamenService.update(+id, updateTipoexamanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoexamenService.remove(+id);
  }
}
