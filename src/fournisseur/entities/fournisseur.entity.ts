import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator'


export class Fournisseur {

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    telephone: string;

    @ApiProperty()
    @IsNotEmpty()
    adresse: string;

    @ApiProperty()
    codePostal: string;
}
