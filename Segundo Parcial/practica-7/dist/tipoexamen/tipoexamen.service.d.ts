import { CreateTipoExamenDto } from './dto/create-tipoexaman.input';
import { UpdateTipoExamenDto } from './dto/update-tipoexaman.input';
import { TipoExamen } from './entities/tipoexaman.entity';
import { Repository } from 'typeorm';
export declare class TipoexamenService {
    private readonly tipoExamenRepository;
    constructor(tipoExamenRepository: Repository<TipoExamen>);
    create(createTipoexamanDto: CreateTipoExamenDto): Promise<TipoExamen>;
    findAll(): Promise<TipoExamen[]>;
    findOne(id: string): Promise<TipoExamen>;
    update(id: string, updateTipoexamanDto: UpdateTipoExamenDto): Promise<TipoExamen>;
    remove(id: string): Promise<TipoExamen>;
}
