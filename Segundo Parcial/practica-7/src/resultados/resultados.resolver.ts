import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ResultadoService } from './resultados.service';
import { Resultado } from './entities/resultado.entity';
import { CreateResultadoDto } from './dto/create-resultado.input';
import { UpdateResultadoDto } from './dto/update-resultado.input';

@Resolver(() => Resultado)
export class ResultadosResolver {
  constructor(private readonly resultadosService: ResultadoService) {}

  @Mutation(() => Resultado)
  createResultado(@Args('createResultadoInput') createResultadoInput: CreateResultadoDto) {
    return this.resultadosService.create(createResultadoInput);
  }

  @Query(() => [Resultado], { name: 'resultados' })
  findAll() {
    return this.resultadosService.findAll();
  }

  @Query(() => Resultado, { name: 'resultado' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.resultadosService.findOne(id);
  }

  @Mutation(() => Resultado)
  updateResultado(@Args('updateResultadoInput') updateResultadoInput: UpdateResultadoDto) {
    return this.resultadosService.update(updateResultadoInput.id, updateResultadoInput);
  }

  @Mutation(() => Resultado)
  removeResultado(@Args('id', { type: () => String }) id: string) {
    return this.resultadosService.remove(id);
  }
}
