import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TipoexamenService } from './tipoexamen.service';
import { TipoExamen } from './entities/tipoexaman.entity';
import { CreateTipoExamenDto } from './dto/create-tipoexaman.input';
import { UpdateTipoExamenDto } from './dto/update-tipoexaman.input';

@Resolver(() => TipoExamen)
export class TipoexamenResolver {
  constructor(private readonly tipoexamenService: TipoexamenService) {}

  @Mutation(() => TipoExamen)
  createTipoexaman(@Args('createTipoexamanInput') createTipoexamanInput: CreateTipoExamenDto) {
    return this.tipoexamenService.create(createTipoexamanInput);
  }

  @Query(() => [TipoExamen], { name: 'tipoexamen' })
  findAll() {
    return this.tipoexamenService.findAll();
  }

  @Query(() => TipoExamen, { name: 'tipoexaman' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.tipoexamenService.findOne(id);
  }

  @Mutation(() => TipoExamen)
  updateTipoexaman(@Args('updateTipoexamanInput') updateTipoexamanInput: UpdateTipoExamenDto) {
    return this.tipoexamenService.update(updateTipoexamanInput.id, updateTipoexamanInput);
  }

  @Mutation(() => TipoExamen)
  removeTipoexaman(@Args('id', { type: () => String }) id: string) {
    return this.tipoexamenService.remove(id);
  }
}
