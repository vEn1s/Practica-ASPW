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
exports.PacientesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const pacientes_service_1 = require("./pacientes.service");
const paciente_entity_1 = require("./entities/paciente.entity");
const create_paciente_input_1 = require("./dto/create-paciente.input");
const update_paciente_input_1 = require("./dto/update-paciente.input");
let PacientesResolver = class PacientesResolver {
    constructor(pacientesService) {
        this.pacientesService = pacientesService;
    }
    async createPaciente(createPacienteInput) {
        return this.pacientesService.create(createPacienteInput);
    }
    async findAll() {
        return this.pacientesService.findAll();
    }
    findOne(id) {
        return this.pacientesService.findOne(id);
    }
    updatePaciente(updatePacienteInput) {
        return this.pacientesService.update(updatePacienteInput.id, updatePacienteInput);
    }
    removePaciente(id) {
        return this.pacientesService.remove(id);
    }
};
exports.PacientesResolver = PacientesResolver;
__decorate([
    (0, graphql_1.Mutation)(() => paciente_entity_1.Paciente),
    __param(0, (0, graphql_1.Args)('createPacienteInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paciente_input_1.CreatePacienteDto]),
    __metadata("design:returntype", Promise)
], PacientesResolver.prototype, "createPaciente", null);
__decorate([
    (0, graphql_1.Query)(() => [paciente_entity_1.Paciente], { name: 'pacientes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PacientesResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => paciente_entity_1.Paciente, { name: 'paciente' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PacientesResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => paciente_entity_1.Paciente),
    __param(0, (0, graphql_1.Args)('updatePacienteInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_paciente_input_1.UpdatePacienteDto]),
    __metadata("design:returntype", void 0)
], PacientesResolver.prototype, "updatePaciente", null);
__decorate([
    (0, graphql_1.Mutation)(() => paciente_entity_1.Paciente),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PacientesResolver.prototype, "removePaciente", null);
exports.PacientesResolver = PacientesResolver = __decorate([
    (0, graphql_1.Resolver)(() => paciente_entity_1.Paciente),
    __metadata("design:paramtypes", [pacientes_service_1.PacienteService])
], PacientesResolver);
//# sourceMappingURL=pacientes.resolver.js.map