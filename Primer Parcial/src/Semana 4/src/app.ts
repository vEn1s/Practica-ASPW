import "reflect-metadata"
import { IngresarDatosP, IngresarDatosTP, IngresarDatosR} from ".";
import {ConsultaGeneral} from "./index"

async function main() {
    try {
        // await IngresarDatosP(123,"asd")
        // await IngresarDatosTP("asd","asd")
        // await IngresarDatosR (1,2,"Good", 10,"Sano")
        await ConsultaGeneral()
    } catch (error) {
        console.error("error en el proceso",error)
    }
    
}

main()

