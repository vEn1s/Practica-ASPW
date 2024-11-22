import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { Server } from 'socket.io';

@WebSocketGateway({cors: true})
export class ResultadoGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss:Server

  constructor(private readonly resultadoService: ResultadoService) {}
  handleConnection(client: any, ...args: any[]) {
    
    const token = client.handshake.headers.authorization;

    console.log(`token: ${token}`);

  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createResultado')
  create(@MessageBody() createResultadoDto: CreateResultadoDto) {
    const inserted= this.resultadoService.create(createResultadoDto);
    this.wss.emit('insertado', inserted)
    console.log(`insertado: ${inserted}`);
  }

  @SubscribeMessage('findAllResultado')
  findAll() {
    const find = this.resultadoService.findAll(); 
    this.wss.emit('encontrado', find)
    console.log(`encontrado: ${find}`);
  
  }

  @SubscribeMessage('findOneResultado')
  findOne(@MessageBody() id: number) {
    const One = this.resultadoService.findOne(id);
    this.wss.emit('encontrado', One)
    console.log(`encontrado: ${One}`);
  }

  @SubscribeMessage('updateResultado')
  update(@MessageBody() updateResultadoDto: UpdateResultadoDto) {
    const updated = this.resultadoService.update(updateResultadoDto.id, updateResultadoDto);
    this.wss.emit('actualizado', updated)
    console.log(`actualizado: ${updated}`);
  }

  @SubscribeMessage('removeResultado')
  remove(@MessageBody() id: number) {
    const deleted = this.resultadoService.remove(id);
    this.wss.emit('eliminado', deleted)
    console.log(`eliminado: ${deleted}`);
  }
}
