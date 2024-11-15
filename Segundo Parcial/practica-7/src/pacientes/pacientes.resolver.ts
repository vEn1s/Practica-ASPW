import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PacienteService } from './pacientes.service';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.input';
import { UpdatePacienteDto } from './dto/update-paciente.input';


@Resolver(() => Paciente)
export class PacientesResolver {
  constructor(private readonly pacientesService: PacienteService) {}

  @Mutation(() => Paciente)
  async createPaciente(@Args('createPacienteInput') createPacienteInput: CreatePacienteDto): Promise<Paciente> {
    return this.pacientesService.create(createPacienteInput);
  }

  @Query(() => [Paciente], { name: 'pacientes' })
  async findAll(): Promise<Paciente[]> {
    return this.pacientesService.findAll();
  }

  @Query(() => Paciente, { name: 'paciente' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Paciente> {
    return this.pacientesService.findOne(id);
  }

  @Mutation(() => Paciente)
  updatePaciente(@Args('updatePacienteInput') updatePacienteInput: UpdatePacienteDto) {
    return this.pacientesService.update(updatePacienteInput.id, updatePacienteInput);
  }

  @Mutation(() => Paciente)
  removePaciente(@Args('id', { type: () => String }) id: string) {
    return this.pacientesService.remove(id);
  }
}
