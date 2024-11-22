import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { TipoexamenService } from './tipoexamen.service';
import { CreateTipoexamanDto } from './dto/create-tipoexaman.dto';
import { UpdateTipoexamanDto } from './dto/update-tipoexaman.dto';
import { Server } from 'socket.io';

@WebSocketGateway()
export class TipoexamenGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly tipoexamenService: TipoexamenService) {}

  handleConnection(client: any, ...args: any[]) {
    const token = client.handshake.headers.authorization;
    console.log(`token: ${token}`);
  }
  handleDisconnect(client: any) {
    throw new Error('Method not implemented.');
  }

  @SubscribeMessage('createTipoexaman')
  create(@MessageBody() createTipoexamanDto: CreateTipoexamanDto) {
    const inserted = this.tipoexamenService.create(createTipoexamanDto);
    this.wss.emit('insertado', inserted);
    console.log(`insertado: ${inserted}`);
  }

  @SubscribeMessage('findAllTipoexamen')
  findAll() {
    const find = this.tipoexamenService.findAll();
    this.wss.emit('encontrado', find);
    console.log(`encontrado: ${find}`);
  }

  @SubscribeMessage('findOneTipoexaman')
  findOne(@MessageBody() id: number) {
    const One = this.tipoexamenService.findOne(id);
    this.wss.emit('encontrado', One);
    console
  }

  @SubscribeMessage('updateTipoexaman')
  update(@MessageBody() updateTipoexamanDto: UpdateTipoexamanDto) {
    const updated = this.tipoexamenService.update(updateTipoexamanDto.id, updateTipoexamanDto);
    this.wss.emit('actualizado', updated);
    console.log(`actualizado: ${updated}`);
  }

  @SubscribeMessage('removeTipoexaman')
  remove(@MessageBody() id: number) {
    const deleted = this.tipoexamenService.remove(id);
    this.wss.emit('eliminado', deleted);
    console.log(`eliminado: ${deleted}`);
  }
}
