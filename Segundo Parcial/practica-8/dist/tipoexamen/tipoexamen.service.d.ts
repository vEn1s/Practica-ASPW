import { CreateTipoexamanDto } from './dto/create-tipoexaman.dto';
import { UpdateTipoexamanDto } from './dto/update-tipoexaman.dto';
export declare class TipoexamenService {
    create(createTipoexamanDto: CreateTipoexamanDto): CreateTipoexamanDto;
    findAll(): {
        id: number;
        Descripcion: string;
        Indicaciones: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateTipoexamanDto: UpdateTipoexamanDto): string;
    remove(id: number): string;
}
