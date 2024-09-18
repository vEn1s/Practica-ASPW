import { AppDataSource } from "./data-source";

let isInitialized = false;

export async function initializeDatabase() {
    if (!isInitialized) {
        try {
            await AppDataSource.initialize();
            isInitialized = true;
            console.log("Conexión a MySQL establecida");
        } catch (error) {
            console.error("Error al conectar a la base de datos:", error);
            throw error; // Lanza el error para que pueda ser manejado en el punto de llamada
        }
    }
}
