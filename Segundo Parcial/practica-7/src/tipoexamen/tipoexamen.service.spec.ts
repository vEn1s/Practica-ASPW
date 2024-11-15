import { Test, TestingModule } from '@nestjs/testing';
import { TipoexamenService } from './tipoexamen.service';

describe('TipoexamenService', () => {
  let service: TipoexamenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoexamenService],
    }).compile();

    service = module.get<TipoexamenService>(TipoexamenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});