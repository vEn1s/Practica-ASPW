import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoExamenDto } from './create-tipoexaman.dto';

export class UpdateTipoexamanDto extends PartialType(CreateTipoExamenDto) {}
