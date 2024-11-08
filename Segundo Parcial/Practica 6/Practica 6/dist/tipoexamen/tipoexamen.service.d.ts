import { CreateTipoExamenDto } from './dto/create-tipoexaman.dto';
import { UpdateTipoexamanDto } from './dto/update-tipoexaman.dto';
export declare class TipoexamenService {
    create(createTipoexamanDto: CreateTipoExamenDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTipoexamanDto: UpdateTipoexamanDto): string;
    remove(id: number): string;
}
