"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoexamenModule = void 0;
const common_1 = require("@nestjs/common");
const tipoexamen_service_1 = require("./tipoexamen.service");
const tipoexamen_gateway_1 = require("./tipoexamen.gateway");
let TipoexamenModule = class TipoexamenModule {
};
exports.TipoexamenModule = TipoexamenModule;
exports.TipoexamenModule = TipoexamenModule = __decorate([
    (0, common_1.Module)({
        providers: [tipoexamen_gateway_1.TipoexamenGateway, tipoexamen_service_1.TipoexamenService],
    })
], TipoexamenModule);
//# sourceMappingURL=tipoexamen.module.js.map