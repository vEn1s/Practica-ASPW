import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';

@Controller()
export class ResultadoController {
  constructor(private readonly resultadoService: ResultadoService) {}

  @MessagePattern('createResultado')
  create(@Payload() createResultadoDto: CreateResultadoDto) {
    return this.resultadoService.create(createResultadoDto);
  }

  @MessagePattern({cmd : 'get-resultados'})
  findAll() {
    return this.resultadoService.findAll();
  }

  @MessagePattern('findOneResultado')
  findOne(@Payload() id: number) {
    return this.resultadoService.findOne(id);
  }

  @MessagePattern('updateResultado')
  update(@Payload() updateResultadoDto: UpdateResultadoDto) {
    return this.resultadoService.update(updateResultadoDto.id, updateResultadoDto);
  }

  @MessagePattern('removeResultado')
  remove(@Payload() id: number) {
    return this.resultadoService.remove(id);
  }
}
