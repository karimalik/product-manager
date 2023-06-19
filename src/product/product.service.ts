import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { Fournisseur } from '../fournisseur/schemas/fournisseur.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  /**
   * insert new record in storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param createProductDto
   * @param fournisseur
   * @returns createdproduct
   */
  async create(
    createProductDto: CreateProductDto,
    fournisseur: Fournisseur,
  ): Promise<ProductDocument> {
    const createdproduct = await new this.productModel({
      ...createProductDto,
      fournisseur,
    });

    return createdproduct.save();
  }

  /**
   * read all data in storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @returns products
   */
  async findAll(): Promise<ProductDocument[]> {
    const products = await this.productModel.find().populate('fournisseur');

    if (!products || products.length == 0) {
      throw new NotFoundException('No data in storage');
    }

    return products;
  }

  /**
   * read specific record in storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param id
   * @returns ExistingProduct
   */
  async findOne(id: string): Promise<ProductDocument> {
    const ExistingProduct = await this.productModel
      .findById(id)
      .populate('fournisseur');

    if (!ExistingProduct) {
      throw new NotFoundException('Data not found');
    }

    return ExistingProduct;
  }

  /**
   * updated the specific record in storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param id
   * @param updateProductDto
   * @returns products
   */
  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductDocument> {
    const updateProduct = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );

    if (!updateProduct) {
      throw new NotFoundException('Data Not found');
    }

    return updateProduct;
  }

  /**
   * deleted the specific data in storage
   * @param id
   * @returns
   */
  async remove(id: string) {
    const deleteProduct = await this.productModel.findByIdAndRemove(id);

    if (!deleteProduct) {
      throw new NotFoundException('Data not found');
    }

    return deleteProduct;
  }
}
