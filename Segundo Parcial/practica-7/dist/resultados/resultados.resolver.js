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
exports.ResultadosResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const resultados_service_1 = require("./resultados.service");
const resultado_entity_1 = require("./entities/resultado.entity");
const create_resultado_input_1 = require("./dto/create-resultado.input");
const update_resultado_input_1 = require("./dto/update-resultado.input");
let ResultadosResolver = class ResultadosResolver {
    constructor(resultadosService) {
        this.resultadosService = resultadosService;
    }
    createResultado(createResultadoInput) {
        return this.resultadosService.create(createResultadoInput);
    }
    findAll() {
        return this.resultadosService.findAll();
    }
    findOne(id) {
        return this.resultadosService.findOne(id);
    }
    updateResultado(updateResultadoInput) {
        return this.resultadosService.update(updateResultadoInput.id, updateResultadoInput);
    }
    removeResultado(id) {
        return this.resultadosService.remove(id);
    }
};
exports.ResultadosResolver = ResultadosResolver;
__decorate([
    (0, graphql_1.Mutation)(() => resultado_entity_1.Resultado),
    __param(0, (0, graphql_1.Args)('createResultadoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resultado_input_1.CreateResultadoDto]),
    __metadata("design:returntype", void 0)
], ResultadosResolver.prototype, "createResultado", null);
__decorate([
    (0, graphql_1.Query)(() => [resultado_entity_1.Resultado], { name: 'resultados' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResultadosResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => resultado_entity_1.Resultado, { name: 'resultado' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadosResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => resultado_entity_1.Resultado),
    __param(0, (0, graphql_1.Args)('updateResultadoInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_resultado_input_1.UpdateResultadoDto]),
    __metadata("design:returntype", void 0)
], ResultadosResolver.prototype, "updateResultado", null);
__decorate([
    (0, graphql_1.Mutation)(() => resultado_entity_1.Resultado),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResultadosResolver.prototype, "removeResultado", null);
exports.ResultadosResolver = ResultadosResolver = __decorate([
    (0, graphql_1.Resolver)(() => resultado_entity_1.Resultado),
    __metadata("design:paramtypes", [resultados_service_1.ResultadoService])
], ResultadosResolver);
//# sourceMappingURL=resultados.resolver.js.map