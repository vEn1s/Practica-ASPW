import { Test, TestingModule } from '@nestjs/testing';
import { TipoexamenResolver } from './tipoexamen.resolver';
import { TipoexamenService } from './tipoexamen.service';

describe('TipoexamenResolver', () => {
  let resolver: TipoexamenResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoexamenResolver, TipoexamenService],
    }).compile();

    resolver = module.get<TipoexamenResolver>(TipoexamenResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
