import { TipoexamenService } from './tipoexamen.service';
import { TipoExamen } from './entities/tipoexaman.entity';
import { CreateTipoExamenDto } from './dto/create-tipoexaman.input';
import { UpdateTipoExamenDto } from './dto/update-tipoexaman.input';
export declare class TipoexamenResolver {
    private readonly tipoexamenService;
    constructor(tipoexamenService: TipoexamenService);
    createTipoexaman(createTipoexamanInput: CreateTipoExamenDto): Promise<TipoExamen>;
    findAll(): Promise<TipoExamen[]>;
    findOne(id: string): Promise<TipoExamen>;
    updateTipoexaman(updateTipoexamanInput: UpdateTipoExamenDto): Promise<TipoExamen>;
    removeTipoexaman(id: string): Promise<TipoExamen>;
}
