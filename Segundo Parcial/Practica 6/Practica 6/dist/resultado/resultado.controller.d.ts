import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
export declare class ResultadoController {
    private readonly resultadoService;
    constructor(resultadoService: ResultadoService);
    create(createResultadoDto: CreateResultadoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateResultadoDto: UpdateResultadoDto): string;
    remove(id: string): string;
}
