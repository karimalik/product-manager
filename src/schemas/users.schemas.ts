import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

/**
 * user schema
 * @author karim kompissi <karimkompissi@gmail.com>
 */
export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({
        required: true
    })
    name: string;
    
    @Prop({
        required: true,
        type: String
    })
    email: string;

    @Prop({
        required: true,
        type: String
    })
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User);