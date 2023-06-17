import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Fournisseur } from '../../fournisseur/schemas/fournisseur.schema';

export class Product {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    dateDelivrance: string;

    @ApiProperty()
    @IsNotEmpty()
    dateExpiration: string;

    @ApiProperty()
    fournisseur: Fournisseur;
}
