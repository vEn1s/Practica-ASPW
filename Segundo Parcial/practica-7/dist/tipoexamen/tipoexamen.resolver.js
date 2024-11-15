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
exports.TipoexamenResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tipoexamen_service_1 = require("./tipoexamen.service");
const tipoexaman_entity_1 = require("./entities/tipoexaman.entity");
const create_tipoexaman_input_1 = require("./dto/create-tipoexaman.input");
const update_tipoexaman_input_1 = require("./dto/update-tipoexaman.input");
let TipoexamenResolver = class TipoexamenResolver {
    constructor(tipoexamenService) {
        this.tipoexamenService = tipoexamenService;
    }
    createTipoexaman(createTipoexamanInput) {
        return this.tipoexamenService.create(createTipoexamanInput);
    }
    findAll() {
        return this.tipoexamenService.findAll();
    }
    findOne(id) {
        return this.tipoexamenService.findOne(id);
    }
    updateTipoexaman(updateTipoexamanInput) {
        return this.tipoexamenService.update(updateTipoexamanInput.id, updateTipoexamanInput);
    }
    removeTipoexaman(id) {
        return this.tipoexamenService.remove(id);
    }
};
exports.TipoexamenResolver = TipoexamenResolver;
__decorate([
    (0, graphql_1.Mutation)(() => tipoexaman_entity_1.TipoExamen),
    __param(0, (0, graphql_1.Args)('createTipoexamanInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipoexaman_input_1.CreateTipoExamenDto]),
    __metadata("design:returntype", void 0)
], TipoexamenResolver.prototype, "createTipoexaman", null);
__decorate([
    (0, graphql_1.Query)(() => [tipoexaman_entity_1.TipoExamen], { name: 'tipoexamen' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipoexamenResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => tipoexaman_entity_1.TipoExamen, { name: 'tipoexaman' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoexamenResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => tipoexaman_entity_1.TipoExamen),
    __param(0, (0, graphql_1.Args)('updateTipoexamanInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tipoexaman_input_1.UpdateTipoExamenDto]),
    __metadata("design:returntype", void 0)
], TipoexamenResolver.prototype, "updateTipoexaman", null);
__decorate([
    (0, graphql_1.Mutation)(() => tipoexaman_entity_1.TipoExamen),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TipoexamenResolver.prototype, "removeTipoexaman", null);
exports.TipoexamenResolver = TipoexamenResolver = __decorate([
    (0, graphql_1.Resolver)(() => tipoexaman_entity_1.TipoExamen),
    __metadata("design:paramtypes", [tipoexamen_service_1.TipoexamenService])
], TipoexamenResolver);
//# sourceMappingURL=tipoexamen.resolver.js.map