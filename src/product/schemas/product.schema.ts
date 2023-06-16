import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Fournisseur } from '../../fournisseur/schemas/fournisseur.schema';
import { Transform, Type } from 'class-transformer';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop({
    required: true,
    type: String,
  })
  name: string;

  @Prop({
    required: true,
    type: Date,
  })
  dateDelivrance: Date;

  @Prop({
    required: true,
    type: Date,
  })
  dateExpriration: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Fournisseur.name })
  @Type(() => Fournisseur)
  fournisseur: Fournisseur;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
