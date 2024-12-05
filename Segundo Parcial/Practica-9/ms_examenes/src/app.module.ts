import { Module } from '@nestjs/common';
import { ResultadoModule } from './resultado/resultado.module';

@Module({
  imports: [ResultadoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
