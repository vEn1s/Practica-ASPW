import { ResultadoService } from './resultados.service';
import { Resultado } from './entities/resultado.entity';
import { CreateResultadoDto } from './dto/create-resultado.input';
import { UpdateResultadoDto } from './dto/update-resultado.input';
export declare class ResultadosResolver {
    private readonly resultadosService;
    constructor(resultadosService: ResultadoService);
    createResultado(createResultadoInput: CreateResultadoDto): Promise<Resultado>;
    findAll(): Promise<Resultado[]>;
    findOne(id: string): Promise<Resultado>;
    updateResultado(updateResultadoInput: UpdateResultadoDto): Promise<Resultado>;
    removeResultado(id: string): Promise<void>;
}
