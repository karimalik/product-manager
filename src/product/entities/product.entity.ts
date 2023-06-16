import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class Product {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    dateDelivrance: Date;

    @ApiProperty()
    @IsDate()
    @IsNotEmpty()
    dateExpiration: Date;
}
