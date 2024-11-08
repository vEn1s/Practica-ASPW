// resultado.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ResultadoDTO {
    @IsNotEmpty()
    @IsNumber()
    ID_Paciente: number;

    @IsNotEmpty()
    @IsNumber()
    ID_TipoExamen: number;

    @IsNotEmpty()
    @IsString()
    Resultadoss: string;

    @IsNotEmpty()
    @IsNumber()
    ValorPagado: number;

    @IsNotEmpty()
    @IsString()
    Observacion: string;
}
