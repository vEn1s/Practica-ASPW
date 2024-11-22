import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { Server } from 'socket.io';
export declare class ResultadoGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly resultadoService;
    wss: Server;
    constructor(resultadoService: ResultadoService);
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
    create(createResultadoDto: CreateResultadoDto): void;
    findAll(): void;
    findOne(id: number): void;
    update(updateResultadoDto: UpdateResultadoDto): void;
    remove(id: number): void;
}
