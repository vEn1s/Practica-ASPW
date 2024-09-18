import { AppDataSource } from "../data-source"
import { TipoExamen, Paciente,Resultado } from "../entity/User"


function IngresarDatosP(Identificacion,Nombre) {
    AppDataSource.initialize().then(async () => {

        const paciente = new Paciente()
        paciente.Identificacion=Identificacion
        paciente.Nombre=Nombre
      
        await AppDataSource.manager.save(paciente)
        console.log("Saved a new user with id: " + paciente.ID)
        
    }).catch(error => console.log(error))
}

function IngresarDatosR(ID_Paciente, ID_TipoExamen, Resultado,ValorPagado,Observacion) {
    AppDataSource.initialize().then(async () => {
        const resultado = new Resultado()
        resultado.ID_Paciente=ID_Paciente
        resultado.ID_TipoExamen=ID_TipoExamen
        resultado.Resultado=Resultado
        resultado.ValorPagado=ValorPagado
        resultado.Observacion=Observacion
        
        await AppDataSource.manager.save(resultado)
        console.log("Saved a new user with id: " + resultado.ID)

    }).catch(error => console.log(error))
}
 function IngresarDatosTP(Descripcion, Indicaciones) {
    AppDataSource.initialize().then(async () => {
        const tipoExamen = new TipoExamen()
        tipoExamen.Descripcion=Descripcion
        tipoExamen.Indicaciones=Indicaciones
        
        await AppDataSource.manager.save(tipoExamen)
        console.log("Saved a new user with id: " + tipoExamen.ID)

        
 })
}


export{IngresarDatosP, IngresarDatosTP, IngresarDatosR}