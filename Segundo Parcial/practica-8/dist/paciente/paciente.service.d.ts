import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
export declare class PacienteService {
    create(createPacienteDto: CreatePacienteDto): CreatePacienteDto;
    findAll(): {
        id: number;
        Nombre: string;
        Identificacion: string;
    }[];
    findOne(id: number): void;
    update(id: number, updatePacienteDto: UpdatePacienteDto): string;
    remove(id: number): string;
}
