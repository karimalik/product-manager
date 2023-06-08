import { ApiProperty } from "@nestjs/swagger";

/**
 * user entity
 * @author karim kompissi <karimkompissi@gmail.com>
 */
export class User {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}
