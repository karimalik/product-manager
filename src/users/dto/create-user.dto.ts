import { ApiProperty } from "@nestjs/swagger";
import { User } from "../entities/user.entity";

/**
 * user DTO
 * @author karim kompissi <karimkompissi@gmail.com>
 */
export class CreateUserDto extends User {}
