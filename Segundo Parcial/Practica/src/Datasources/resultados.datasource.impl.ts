import {Resultado} from "../entity/Resultado";
import {ResultadosDatasource} from "./ResultadosDatasource";
import { DataSource, Repository } from "typeorm";

export class ResultadoDatasourceImpl implements ResultadosDatasource{
    private repository: Repository<Resultado>;

    constructor(datasource: DataSource){
        this.repository = datasource.getRepository(Resultado);
    }

    async obtenerResultados(id: number): Promise<Resultado | null> {
        return await this.repository.findOneBy({ ID: id });
    }

    async crearResultado(resultado: Resultado): Promise<Resultado> {
        return await this.repository.save(resultado);
    }

    async actualizarResultado(id: number, resultado: Partial<Resultado>): Promise<Resultado | null> {
        await this.repository.update(id, resultado);
        return await this.repository.findOneBy({ ID: id});
    }

    async eliminarResultado(id: number): Promise<boolean> {
        await this.repository.delete(id);
        return true;
    }

}