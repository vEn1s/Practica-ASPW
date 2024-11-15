import { Test, TestingModule } from '@nestjs/testing';
import { ResultadosResolver } from './resultados.resolver';
import { ResultadoService } from './resultados.service';

describe('ResultadosResolver', () => {
  let resolver: ResultadosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultadosResolver, ResultadoService],
    }).compile();

    resolver = module.get<ResultadosResolver>(ResultadosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
