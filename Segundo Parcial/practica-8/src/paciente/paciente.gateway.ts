import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer} from '@nestjs/websockets';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Server } from 'socket.io';

@WebSocketGateway ()
export class PacienteGateway implements OnGatewayConnection, OnGatewayDisconnect {

  constructor(private readonly pacienteService: PacienteService) {}

  @WebSocketServer()
  wss:Server

  handleConnection(client: any, ...args: any[]) {
    const token = client.handshake.headers.authorization;
    console.log(`token: ${token}`);
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createPaciente')
  create(@MessageBody() createPacienteDto: CreatePacienteDto) {
    const inserted = this.pacienteService.create(createPacienteDto);
    this.wss.emit('NewPaciente', inserted);
    console.log(`insertado: ${inserted}`);
  }

  @SubscribeMessage('findAllPaciente')
  findAll() {
    const find = this.pacienteService.findAll();
    this.wss.emit('encontrado', find);
    console.log(`encontrado: ${find}`);
  }

  @SubscribeMessage('findOnePaciente')
  findOne(@MessageBody() id: number) {
    const One = this.pacienteService.findOne(id);
    this.wss.emit('encontrado', One);
    console.log(`encontrado: ${One}`);
  }

  @SubscribeMessage('updatePaciente')
  update(@MessageBody() updatePacienteDto: UpdatePacienteDto) {
    const updated = this.pacienteService.update(updatePacienteDto.id, updatePacienteDto);
    this.wss.emit('actualizado', updated);
    console.log(`actualizado: ${updated}`);
  }

  @SubscribeMessage('removePaciente')
  remove(@MessageBody() id: number) {
    const deleted = this.pacienteService.remove(id);
    this.wss.emit('eliminado', deleted);
    console.log(`eliminado: ${deleted}`);
  }
}
