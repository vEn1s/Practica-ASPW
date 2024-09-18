"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDatabase = initializeDatabase;
const data_source_1 = require("./data-source");
let isInitialized = false;
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!isInitialized) {
            try {
                yield data_source_1.AppDataSource.initialize();
                isInitialized = true;
                console.log("Conexión a MySQL establecida");
            }
            catch (error) {
                console.error("Error al conectar a la base de datos:", error);
                throw error; // Lanza el error para que pueda ser manejado en el punto de llamada
            }
        }
    });
}
