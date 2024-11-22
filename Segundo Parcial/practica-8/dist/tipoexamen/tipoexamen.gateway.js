"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoexamenGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const tipoexamen_service_1 = require("./tipoexamen.service");
const create_tipoexaman_dto_1 = require("./dto/create-tipoexaman.dto");
const update_tipoexaman_dto_1 = require("./dto/update-tipoexaman.dto");
const socket_io_1 = require("socket.io");
let TipoexamenGateway = class TipoexamenGateway {
    constructor(tipoexamenService) {
        this.tipoexamenService = tipoexamenService;
    }
    handleConnection(client, ...args) {
        const token = client.handshake.headers.authorization;
        console.log(`token: ${token}`);
    }
    handleDisconnect(client) {
        throw new Error('Method not implemented.');
    }
    create(createTipoexamanDto) {
        const inserted = this.tipoexamenService.create(createTipoexamanDto);
        this.wss.emit('insertado', inserted);
        console.log(`insertado: ${inserted}`);
    }
    findAll() {
        const find = this.tipoexamenService.findAll();
        this.wss.emit('encontrado', find);
        console.log(`encontrado: ${find}`);
    }
    findOne(id) {
        const One = this.tipoexamenService.findOne(id);
        this.wss.emit('encontrado', One);
        console;
    }
    update(updateTipoexamanDto) {
        const updated = this.tipoexamenService.update(updateTipoexamanDto.id, updateTipoexamanDto);
        this.wss.emit('actualizado', updated);
        console.log(`actualizado: ${updated}`);
    }
    remove(id) {
        const deleted = this.tipoexamenService.remove(id);
        this.wss.emit('eliminado', deleted);
        console.log(`eliminado: ${deleted}`);
    }
};
exports.TipoexamenGateway = TipoexamenGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], TipoexamenGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('createTipoexaman'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipoexaman_dto_1.CreateTipoexamanDto]),
    __metadata("design:returntype", void 0)
], TipoexamenGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllTipoexamen'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipoexamenGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOneTipoexaman'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoexamenGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updateTipoexaman'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tipoexaman_dto_1.UpdateTipoexamanDto]),
    __metadata("design:returntype", void 0)
], TipoexamenGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removeTipoexaman'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoexamenGateway.prototype, "remove", null);
exports.TipoexamenGateway = TipoexamenGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [tipoexamen_service_1.TipoexamenService])
], TipoexamenGateway);
//# sourceMappingURL=tipoexamen.gateway.js.map