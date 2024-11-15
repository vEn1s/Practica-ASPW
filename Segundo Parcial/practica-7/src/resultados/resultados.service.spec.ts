import { Test, TestingModule } from '@nestjs/testing';
import { ResultadoService } from './resultados.service';

describe('ResultadoService', () => {
  let service: ResultadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResultadoService],
    }).compile();

    service = module.get<ResultadoService>(ResultadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});