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
exports.PacienteGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const paciente_service_1 = require("./paciente.service");
const create_paciente_dto_1 = require("./dto/create-paciente.dto");
const update_paciente_dto_1 = require("./dto/update-paciente.dto");
const socket_io_1 = require("socket.io");
let PacienteGateway = class PacienteGateway {
    constructor(pacienteService) {
        this.pacienteService = pacienteService;
    }
    handleConnection(client, ...args) {
        const token = client.handshake.headers.authorization;
        console.log(`token: ${token}`);
    }
    handleDisconnect(client) {
        throw new Error('Method not implemented.');
    }
    create(createPacienteDto) {
        const inserted = this.pacienteService.create(createPacienteDto);
        this.wss.emit('NewPaciente', inserted);
        console.log(`insertado: ${inserted}`);
    }
    findAll() {
        const find = this.pacienteService.findAll();
        this.wss.emit('encontrado', find);
        console.log(`encontrado: ${find}`);
    }
    findOne(id) {
        const One = this.pacienteService.findOne(id);
        this.wss.emit('encontrado', One);
        console.log(`encontrado: ${One}`);
    }
    update(updatePacienteDto) {
        const updated = this.pacienteService.update(updatePacienteDto.id, updatePacienteDto);
        this.wss.emit('actualizado', updated);
        console.log(`actualizado: ${updated}`);
    }
    remove(id) {
        const deleted = this.pacienteService.remove(id);
        this.wss.emit('eliminado', deleted);
        console.log(`eliminado: ${deleted}`);
    }
};
exports.PacienteGateway = PacienteGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], PacienteGateway.prototype, "wss", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('createPaciente'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paciente_dto_1.CreatePacienteDto]),
    __metadata("design:returntype", void 0)
], PacienteGateway.prototype, "create", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findAllPaciente'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PacienteGateway.prototype, "findAll", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('findOnePaciente'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PacienteGateway.prototype, "findOne", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('updatePaciente'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_paciente_dto_1.UpdatePacienteDto]),
    __metadata("design:returntype", void 0)
], PacienteGateway.prototype, "update", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('removePaciente'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PacienteGateway.prototype, "remove", null);
exports.PacienteGateway = PacienteGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [paciente_service_1.PacienteService])
], PacienteGateway);
//# sourceMappingURL=paciente.gateway.js.map