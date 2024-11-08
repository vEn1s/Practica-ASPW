import { Resultado } from '../entity/Resultado';

export interface IResultadoRepository {
    findById(id: number): Promise<Resultado | null>;
    create(resultado: Resultado): Promise<Resultado>;
    update(id: number, resultado: Resultado): Promise<Resultado>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Resultado[]>;
}
