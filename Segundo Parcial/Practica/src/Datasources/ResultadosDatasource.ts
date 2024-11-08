import { Resultado } from "../entity/Resultado";
export interface ResultadosDatasource {
    obtenerResultados(id:number): Promise<Resultado |null>;
    crearResultado(resultado: Resultado): Promise<Resultado>;
    actualizarResultado(id:number, resultado:Partial <Resultado> ): Promise<Resultado | null>;
    eliminarResultado(id:number): Promise<boolean>;
}