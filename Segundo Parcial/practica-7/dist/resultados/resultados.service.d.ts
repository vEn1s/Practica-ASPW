import { Repository } from 'typeorm';
import { Resultado } from './entities/resultado.entity';
import { CreateResultadoDto } from './dto/create-resultado.input';
import { UpdateResultadoDto } from './dto/update-resultado.input';
import { TipoExamen } from 'src/tipoexamen/entities/tipoexaman.entity';
export declare class ResultadoService {
    private readonly resultadoRepository;
    private readonly tipoExamenRepository;
    constructor(resultadoRepository: Repository<Resultado>, tipoExamenRepository: Repository<TipoExamen>);
    create(createResultadoDto: CreateResultadoDto): Promise<Resultado>;
    findAll(): Promise<Resultado[]>;
    findOne(id: string): Promise<Resultado>;
    update(id: string, updateResultadoDto: UpdateResultadoDto): Promise<Resultado>;
    remove(id: string): Promise<void>;
}
