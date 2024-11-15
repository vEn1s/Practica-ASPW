"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadosModule = void 0;
const common_1 = require("@nestjs/common");
const resultados_service_1 = require("./resultados.service");
const resultados_resolver_1 = require("./resultados.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const resultado_entity_1 = require("./entities/resultado.entity");
const tipoexamen_module_1 = require("../tipoexamen/tipoexamen.module");
let ResultadosModule = class ResultadosModule {
};
exports.ResultadosModule = ResultadosModule;
exports.ResultadosModule = ResultadosModule = __decorate([
    (0, common_1.Module)({
        providers: [resultados_service_1.ResultadoService, resultados_resolver_1.ResultadosResolver],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([resultado_entity_1.Resultado]), tipoexamen_module_1.TipoexamenModule
        ],
        exports: [resultados_service_1.ResultadoService]
    })
], ResultadosModule);
//# sourceMappingURL=resultados.module.js.map