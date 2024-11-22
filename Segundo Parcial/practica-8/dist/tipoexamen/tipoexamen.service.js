"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoexamenService = void 0;
const common_1 = require("@nestjs/common");
const tipoexamen = [{
        id: 1,
        Descripcion: 'Descripcion del tipo de examen 1',
        Indicaciones: 'Tipo de examen 1',
    },
    {
        id: 2,
        Descripcion: 'Descripcion del tipo de examen 2',
        Indicaciones: 'Tipo de examen 2',
    }];
let TipoexamenService = class TipoexamenService {
    create(createTipoexamanDto) {
        tipoexamen.push(createTipoexamanDto);
        return createTipoexamanDto;
    }
    findAll() {
        return tipoexamen;
    }
    findOne(id) {
        return `This action returns a #${id} tipoexaman`;
    }
    update(id, updateTipoexamanDto) {
        return `This action updates a #${id} tipoexaman`;
    }
    remove(id) {
        return `This action removes a #${id} tipoexaman`;
    }
};
exports.TipoexamenService = TipoexamenService;
exports.TipoexamenService = TipoexamenService = __decorate([
    (0, common_1.Injectable)()
], TipoexamenService);
//# sourceMappingURL=tipoexamen.service.js.map