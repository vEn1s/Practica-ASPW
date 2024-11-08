import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
export declare class ResultadoService {
    create(createResultadoDto: CreateResultadoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateResultadoDto: UpdateResultadoDto): string;
    remove(id: number): string;
}
