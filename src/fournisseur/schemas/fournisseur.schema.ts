import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


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
        type: String
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
}

export const FournisseurSchema = SchemaFactory.createForClass(Fournisseur);