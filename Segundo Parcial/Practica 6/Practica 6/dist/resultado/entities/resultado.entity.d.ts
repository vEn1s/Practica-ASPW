import { TipoExamen } from "src/tipoexamen/entities/tipoexaman.entity";
import { Paciente } from "src/paciente/entities/paciente.entity";
export declare class Resultado {
    ID: number;
    ID_Paciente: number;
    ID_TipoExamen: number;
    Resultadoss: string;
    ValorPagado: number;
    Observacion: string;
    paciente: Paciente;
    tipoExamen: TipoExamen;
}
