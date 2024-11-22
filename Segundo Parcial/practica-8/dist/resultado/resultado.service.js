"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoService = void 0;
const common_1 = require("@nestjs/common");
const resultados = [{
        id: 1,
        ID_Paciente: 1,
        ID_TipoExamen: 1,
        Resultadoss: 'Positivo',
        ValorPagado: 100,
        Observacion: 'Ninguna',
    },
    {
        id: 2,
        ID_Paciente: 2,
        ID_TipoExamen: 2,
        Resultadoss: 'Negativo',
        ValorPagado: 200,
        Observacion: 'Ninguna',
    }];
let ResultadoService = class ResultadoService {
    create(createResultadoDto) {
        resultados.push(createResultadoDto);
        return createResultadoDto;
    }
    findAll() {
        return resultados;
    }
    findOne(id) {
        return `This action returns a #${id} resultado`;
    }
    update(id, updateResultadoDto) {
        return `This action updates a #${id} resultado`;
    }
    remove(id) {
        return `This action removes a #${id} resultado`;
    }
};
exports.ResultadoService = ResultadoService;
exports.ResultadoService = ResultadoService = __decorate([
    (0, common_1.Injectable)()
], ResultadoService);
//# sourceMappingURL=resultado.service.js.map