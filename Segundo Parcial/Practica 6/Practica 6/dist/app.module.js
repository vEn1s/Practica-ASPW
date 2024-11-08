"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const paciente_module_1 = require("./paciente/paciente.module");
const resultado_module_1 = require("./resultado/resultado.module");
const tipoexamen_module_1 = require("./tipoexamen/tipoexamen.module");
const typeorm_1 = require("@nestjs/typeorm");
const paciente_entity_1 = require("./paciente/entities/paciente.entity");
const resultado_entity_1 = require("./resultado/entities/resultado.entity");
const tipoexaman_entity_1 = require("./tipoexamen/entities/tipoexaman.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'practica6',
                entities: [paciente_entity_1.Paciente, resultado_entity_1.Resultado, tipoexaman_entity_1.TipoExamen],
                synchronize: true,
            }),
            paciente_module_1.PacienteModule,
            resultado_module_1.ResultadoModule,
            tipoexamen_module_1.TipoexamenModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map