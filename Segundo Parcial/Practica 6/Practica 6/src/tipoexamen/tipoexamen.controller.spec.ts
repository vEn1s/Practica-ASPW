import { Test, TestingModule } from '@nestjs/testing';
import { TipoexamenController } from './tipoexamen.controller';
import { TipoexamenService } from './tipoexamen.service';

describe('TipoexamenController', () => {
  let controller: TipoexamenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoexamenController],
      providers: [TipoexamenService],
    }).compile();

    controller = module.get<TipoexamenController>(TipoexamenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
