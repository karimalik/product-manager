import { Prop, Schema } from "@nestjs/mongoose";


export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop({
        required: true,
        type: String
    })
    name: string;
}
