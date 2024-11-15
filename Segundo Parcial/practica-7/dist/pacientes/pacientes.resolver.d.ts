import { PacienteService } from './pacientes.service';
import { Paciente } from './entities/paciente.entity';
import { CreatePacienteDto } from './dto/create-paciente.input';
import { UpdatePacienteDto } from './dto/update-paciente.input';
export declare class PacientesResolver {
    private readonly pacientesService;
    constructor(pacientesService: PacienteService);
    createPaciente(createPacienteInput: CreatePacienteDto): Promise<Paciente>;
    findAll(): Promise<Paciente[]>;
    findOne(id: string): Promise<Paciente>;
    updatePaciente(updatePacienteInput: UpdatePacienteDto): Promise<Paciente>;
    removePaciente(id: string): Promise<Paciente>;
}
