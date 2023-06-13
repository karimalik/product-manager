import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

/**
 * auth service create a hash password to secure application
 * @author karim kompissi <karimkompissi@gmail.com>
 */

@Injectable()
export class HashService {
   // hash password
    // async hashPassword(password: string) {
    //     const saltOrRouds = 10;
    //     return await bcrypt.hash(password, saltOrRouds);
    // }

    // //compare password
    // async comparePassword(password: string, hash) {
    //     return await bcrypt.compare(password, hash);
    // }
}