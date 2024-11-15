import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateTipoExamenDto } from "./create-tipoexaman.input";

@InputType()
export class UpdateTipoExamenDto extends PartialType(CreateTipoExamenDto) {
    @Field()
    id: string;
}