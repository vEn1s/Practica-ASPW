import { TipoExamen } from "src/tipoexamen/entities/tipoexaman.entity";
import { Paciente } from "src/pacientes/entities/paciente.entity";
export declare class Resultado {
    ID: string;
    ID_Paciente: number;
    ID_TipoExamen: number;
    Resultadoss: string;
    ValorPagado: number;
    Observacion: string;
    paciente: Paciente;
    tipoExamen: TipoExamen;
}
