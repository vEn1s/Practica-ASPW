import { Module } from '@nestjs/common';
import { ResultadoModule } from './resultado/resultado.module';
import { NatsModule } from './transports/nats.module';

@Module({
  imports: [ResultadoModule, NatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
