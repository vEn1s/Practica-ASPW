import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { TipoexamenService } from './tipoexamen.service';
import { CreateTipoexamanDto } from './dto/create-tipoexaman.dto';
import { UpdateTipoexamanDto } from './dto/update-tipoexaman.dto';
import { Server } from 'socket.io';
export declare class TipoexamenGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly tipoexamenService;
    wss: Server;
    constructor(tipoexamenService: TipoexamenService);
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
    create(createTipoexamanDto: CreateTipoexamanDto): void;
    findAll(): void;
    findOne(id: number): void;
    update(updateTipoexamanDto: UpdateTipoexamanDto): void;
    remove(id: number): void;
}
