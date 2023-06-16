import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, Document } from "mongoose";


export type FournisseurDocument = Fournisseur & Document;

@Schema()
export class Fournisseur {

    @Prop({
        required: true,
        type: String
    })
    name: string;

    @Prop({
        required: false,
        type: String,
        unique: true
    })
    email: string;

    @Prop({
        required: true,
        type: String
    })
    telephone: string;

    @Prop({
        required: true,
        type: String
    })
    adresse: string;

    @Prop({
        required: false,
        type: String
    })
    codePostal: string;
    
    // @Prop({
    //     type: Date
    // })
    // created_at: Date
}

export const FournisseurSchema = SchemaFactory.createForClass(Fournisseur);