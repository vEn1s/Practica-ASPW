import { Resultado } from "src/resultados/entities/resultado.entity";
export declare class Paciente {
    ID: string;
    Nombre: string;
    Identificacion: number;
    resultados: Resultado[];
}
