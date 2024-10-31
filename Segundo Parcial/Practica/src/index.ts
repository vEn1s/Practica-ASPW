import { NestFactory } from '@nestjs/core';
import { AppDataSource } from './data-source';

async function bootstrap() {
    const app = await NestFactory.create(AppDataSource);
    app.enableCors(); // Si necesitas habilitar CORS
    await app.listen(3000); // Levanta el servidor en el puerto 3000
    console.log('Servidor iniciado en http://localhost:3000'); 
}

bootstrap();
