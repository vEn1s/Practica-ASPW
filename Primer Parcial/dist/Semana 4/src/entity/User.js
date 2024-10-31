"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoExamen = exports.Resultado = exports.Paciente = void 0;
const typeorm_1 = require("typeorm");
let Paciente = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _ID_decorators;
    let _ID_initializers = [];
    let _ID_extraInitializers = [];
    let _Nombre_decorators;
    let _Nombre_initializers = [];
    let _Nombre_extraInitializers = [];
    let _Identificacion_decorators;
    let _Identificacion_initializers = [];
    let _Identificacion_extraInitializers = [];
    var Paciente = _classThis = class {
        constructor() {
            this.ID = __runInitializers(this, _ID_initializers, void 0);
            this.Nombre = (__runInitializers(this, _ID_extraInitializers), __runInitializers(this, _Nombre_initializers, void 0));
            this.Identificacion = (__runInitializers(this, _Nombre_extraInitializers), __runInitializers(this, _Identificacion_initializers, void 0));
            __runInitializers(this, _Identificacion_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Paciente");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _ID_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _Nombre_decorators = [(0, typeorm_1.Column)()];
        _Identificacion_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _ID_decorators, { kind: "field", name: "ID", static: false, private: false, access: { has: obj => "ID" in obj, get: obj => obj.ID, set: (obj, value) => { obj.ID = value; } }, metadata: _metadata }, _ID_initializers, _ID_extraInitializers);
        __esDecorate(null, null, _Nombre_decorators, { kind: "field", name: "Nombre", static: false, private: false, access: { has: obj => "Nombre" in obj, get: obj => obj.Nombre, set: (obj, value) => { obj.Nombre = value; } }, metadata: _metadata }, _Nombre_initializers, _Nombre_extraInitializers);
        __esDecorate(null, null, _Identificacion_decorators, { kind: "field", name: "Identificacion", static: false, private: false, access: { has: obj => "Identificacion" in obj, get: obj => obj.Identificacion, set: (obj, value) => { obj.Identificacion = value; } }, metadata: _metadata }, _Identificacion_initializers, _Identificacion_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Paciente = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Paciente = _classThis;
})();
exports.Paciente = Paciente;
let TipoExamen = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _ID_decorators;
    let _ID_initializers = [];
    let _ID_extraInitializers = [];
    let _Descripcion_decorators;
    let _Descripcion_initializers = [];
    let _Descripcion_extraInitializers = [];
    let _Indicaciones_decorators;
    let _Indicaciones_initializers = [];
    let _Indicaciones_extraInitializers = [];
    var TipoExamen = _classThis = class {
        constructor() {
            this.ID = __runInitializers(this, _ID_initializers, void 0);
            this.Descripcion = (__runInitializers(this, _ID_extraInitializers), __runInitializers(this, _Descripcion_initializers, void 0));
            this.Indicaciones = (__runInitializers(this, _Descripcion_extraInitializers), __runInitializers(this, _Indicaciones_initializers, void 0));
            __runInitializers(this, _Indicaciones_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "TipoExamen");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _ID_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _Descripcion_decorators = [(0, typeorm_1.Column)()];
        _Indicaciones_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _ID_decorators, { kind: "field", name: "ID", static: false, private: false, access: { has: obj => "ID" in obj, get: obj => obj.ID, set: (obj, value) => { obj.ID = value; } }, metadata: _metadata }, _ID_initializers, _ID_extraInitializers);
        __esDecorate(null, null, _Descripcion_decorators, { kind: "field", name: "Descripcion", static: false, private: false, access: { has: obj => "Descripcion" in obj, get: obj => obj.Descripcion, set: (obj, value) => { obj.Descripcion = value; } }, metadata: _metadata }, _Descripcion_initializers, _Descripcion_extraInitializers);
        __esDecorate(null, null, _Indicaciones_decorators, { kind: "field", name: "Indicaciones", static: false, private: false, access: { has: obj => "Indicaciones" in obj, get: obj => obj.Indicaciones, set: (obj, value) => { obj.Indicaciones = value; } }, metadata: _metadata }, _Indicaciones_initializers, _Indicaciones_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TipoExamen = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TipoExamen = _classThis;
})();
exports.TipoExamen = TipoExamen;
let Resultado = (() => {
    let _classDecorators = [(0, typeorm_1.Entity)()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _ID_decorators;
    let _ID_initializers = [];
    let _ID_extraInitializers = [];
    let _ID_Paciente_decorators;
    let _ID_Paciente_initializers = [];
    let _ID_Paciente_extraInitializers = [];
    let _ID_TipoExamen_decorators;
    let _ID_TipoExamen_initializers = [];
    let _ID_TipoExamen_extraInitializers = [];
    let _Resultadoss_decorators;
    let _Resultadoss_initializers = [];
    let _Resultadoss_extraInitializers = [];
    let _ValorPagado_decorators;
    let _ValorPagado_initializers = [];
    let _ValorPagado_extraInitializers = [];
    let _Observacion_decorators;
    let _Observacion_initializers = [];
    let _Observacion_extraInitializers = [];
    var Resultado = _classThis = class {
        constructor() {
            this.ID = __runInitializers(this, _ID_initializers, void 0);
            this.ID_Paciente = (__runInitializers(this, _ID_extraInitializers), __runInitializers(this, _ID_Paciente_initializers, void 0));
            this.ID_TipoExamen = (__runInitializers(this, _ID_Paciente_extraInitializers), __runInitializers(this, _ID_TipoExamen_initializers, void 0));
            this.Resultadoss = (__runInitializers(this, _ID_TipoExamen_extraInitializers), __runInitializers(this, _Resultadoss_initializers, void 0));
            this.ValorPagado = (__runInitializers(this, _Resultadoss_extraInitializers), __runInitializers(this, _ValorPagado_initializers, void 0));
            this.Observacion = (__runInitializers(this, _ValorPagado_extraInitializers), __runInitializers(this, _Observacion_initializers, void 0));
            __runInitializers(this, _Observacion_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Resultado");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _ID_decorators = [(0, typeorm_1.PrimaryGeneratedColumn)()];
        _ID_Paciente_decorators = [(0, typeorm_1.Column)()];
        _ID_TipoExamen_decorators = [(0, typeorm_1.Column)()];
        _Resultadoss_decorators = [(0, typeorm_1.Column)()];
        _ValorPagado_decorators = [(0, typeorm_1.Column)()];
        _Observacion_decorators = [(0, typeorm_1.Column)()];
        __esDecorate(null, null, _ID_decorators, { kind: "field", name: "ID", static: false, private: false, access: { has: obj => "ID" in obj, get: obj => obj.ID, set: (obj, value) => { obj.ID = value; } }, metadata: _metadata }, _ID_initializers, _ID_extraInitializers);
        __esDecorate(null, null, _ID_Paciente_decorators, { kind: "field", name: "ID_Paciente", static: false, private: false, access: { has: obj => "ID_Paciente" in obj, get: obj => obj.ID_Paciente, set: (obj, value) => { obj.ID_Paciente = value; } }, metadata: _metadata }, _ID_Paciente_initializers, _ID_Paciente_extraInitializers);
        __esDecorate(null, null, _ID_TipoExamen_decorators, { kind: "field", name: "ID_TipoExamen", static: false, private: false, access: { has: obj => "ID_TipoExamen" in obj, get: obj => obj.ID_TipoExamen, set: (obj, value) => { obj.ID_TipoExamen = value; } }, metadata: _metadata }, _ID_TipoExamen_initializers, _ID_TipoExamen_extraInitializers);
        __esDecorate(null, null, _Resultadoss_decorators, { kind: "field", name: "Resultadoss", static: false, private: false, access: { has: obj => "Resultadoss" in obj, get: obj => obj.Resultadoss, set: (obj, value) => { obj.Resultadoss = value; } }, metadata: _metadata }, _Resultadoss_initializers, _Resultadoss_extraInitializers);
        __esDecorate(null, null, _ValorPagado_decorators, { kind: "field", name: "ValorPagado", static: false, private: false, access: { has: obj => "ValorPagado" in obj, get: obj => obj.ValorPagado, set: (obj, value) => { obj.ValorPagado = value; } }, metadata: _metadata }, _ValorPagado_initializers, _ValorPagado_extraInitializers);
        __esDecorate(null, null, _Observacion_decorators, { kind: "field", name: "Observacion", static: false, private: false, access: { has: obj => "Observacion" in obj, get: obj => obj.Observacion, set: (obj, value) => { obj.Observacion = value; } }, metadata: _metadata }, _Observacion_initializers, _Observacion_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Resultado = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Resultado = _classThis;
})();
exports.Resultado = Resultado;
