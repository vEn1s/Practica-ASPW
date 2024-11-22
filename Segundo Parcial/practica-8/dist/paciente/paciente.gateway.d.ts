import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Server } from 'socket.io';
export declare class PacienteGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly pacienteService;
    constructor(pacienteService: PacienteService);
    wss: Server;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: any): void;
    create(createPacienteDto: CreatePacienteDto): void;
    findAll(): void;
    findOne(id: number): void;
    update(updatePacienteDto: UpdatePacienteDto): void;
    remove(id: number): void;
}
