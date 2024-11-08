import { TipoexamenService } from './tipoexamen.service';
import { CreateTipoExamenDto } from './dto/create-tipoexaman.dto';
import { UpdateTipoexamanDto } from './dto/update-tipoexaman.dto';
export declare class TipoexamenController {
    private readonly tipoexamenService;
    constructor(tipoexamenService: TipoexamenService);
    create(createTipoexamanDto: CreateTipoExamenDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTipoexamanDto: UpdateTipoexamanDto): string;
    remove(id: string): string;
}
