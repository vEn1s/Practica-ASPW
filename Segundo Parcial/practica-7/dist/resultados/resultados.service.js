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
exports.ResultadoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const resultado_entity_1 = require("./entities/resultado.entity");
const tipoexaman_entity_1 = require("../tipoexamen/entities/tipoexaman.entity");
let ResultadoService = class ResultadoService {
    constructor(resultadoRepository, tipoExamenRepository) {
        this.resultadoRepository = resultadoRepository;
        this.tipoExamenRepository = tipoExamenRepository;
    }
    async create(createResultadoDto) {
        const { ID_Paciente, ID_TipoExamen, Resultadoss, ValorPagado, Observacion } = createResultadoDto;
        const tipoExamen = await this.tipoExamenRepository.findOne({
            where: { ID: ID_TipoExamen.toString() },
        });
        if (!tipoExamen) {
            throw new common_1.NotFoundException('TipoExamen no encontrado');
        }
        const resultado = this.resultadoRepository.create({
            ID_Paciente,
            ID_TipoExamen,
            Resultadoss,
            ValorPagado,
            Observacion,
            tipoExamen,
        });
        return this.resultadoRepository.save(resultado);
    }
    async findAll() {
        return this.resultadoRepository.find();
    }
    async findOne(id) {
        const resultado = await this.resultadoRepository.findOne({
            where: { ID: id },
        });
        if (!resultado) {
            throw new common_1.NotFoundException('Resultado no encontrado');
        }
        return resultado;
    }
    async update(id, updateResultadoDto) {
        const resultado = await this.findOne(id);
        if (!resultado) {
            throw new common_1.NotFoundException('Resultado no encontrado');
        }
        const updatedResult = Object.assign(resultado, updateResultadoDto);
        return this.resultadoRepository.save(updatedResult);
    }
    async remove(id) {
        const resultado = await this.findOne(id);
        if (!resultado) {
            throw new common_1.NotFoundException('Resultado no encontrado');
        }
        await this.resultadoRepository.remove(resultado);
    }
};
exports.ResultadoService = ResultadoService;
exports.ResultadoService = ResultadoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(resultado_entity_1.Resultado)),
    __param(1, (0, typeorm_1.InjectRepository)(tipoexaman_entity_1.TipoExamen)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ResultadoService);
//# sourceMappingURL=resultados.service.js.map