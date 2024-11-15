import { Repository } from 'typeorm';
import { CreatePacienteDto } from './dto/create-paciente.input';
import { UpdatePacienteDto } from './dto/update-paciente.input';
import { Paciente } from './entities/paciente.entity';
export declare class PacienteService {
    private pacienteRepository;
    constructor(pacienteRepository: Repository<Paciente>);
    create(createPacienteDto: CreatePacienteDto): Promise<Paciente>;
    findAll(): Promise<Paciente[]>;
    findOne(id: string): Promise<Paciente>;
    update(id: string, updatePacienteDto: UpdatePacienteDto): Promise<Paciente>;
    remove(id: string): Promise<Paciente>;
}
