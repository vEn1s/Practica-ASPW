import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
export declare class ResultadoService {
    create(createResultadoDto: CreateResultadoDto): CreateResultadoDto;
    findAll(): {
        id: number;
        ID_Paciente: number;
        ID_TipoExamen: number;
        Resultadoss: string;
        ValorPagado: number;
        Observacion: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateResultadoDto: UpdateResultadoDto): string;
    remove(id: number): string;
}
