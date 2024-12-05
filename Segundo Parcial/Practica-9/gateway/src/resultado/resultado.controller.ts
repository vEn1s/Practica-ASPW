import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { catchError } from 'rxjs/operators';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('resultado')
export class ResultadoController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) {}

  @Post()
  create(@Body() createResultadoDto: CreateResultadoDto) {
  }

  @Get()
  async findAll() {
    // try{
    //   const resultados = await firstValueFrom(this.client.send('get-resultados', {}));
    //   return resultados;
    // }
    // catch(error){
    //   throw new RpcException(error);
      // }

      return this.client.send({ cmd: 'get-resultados' }, {}).pipe(
        catchError((error) => {
          throw new RpcException(error);
        }),
      );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResultadoDto: UpdateResultadoDto) {
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  }
}
