import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { Fournisseur } from '../fournisseur/schemas/fournisseur.schema';

@ApiTags('product resource')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  /**
   * insert new record in storage
   *
   * @author karim kompissi <karimkompissi@gmail.com> 
   * @param response 
   * @param createProductDto 
   * @param fournisseur 
   * @returns product
   */
  @Post()
  async create(@Res() response, @Body() createProductDto: CreateProductDto, fournisseur: Fournisseur) {
    try {
      const createdProduct = await this.productService.create(createProductDto, fournisseur);

      return response.status(HttpStatus.CREATED).json({
        message: 'Product created successfully',
        createdProduct
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: 'product not created!',
      });
    }
  }

  /**
   * read all data in storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param response 
   * @returns products
   */
  @Get()
  async findAll(@Res() response) {
    try {
      const products = await this.productService.findAll();

      return response.status(HttpStatus.OK).json({
        message: 'All product found successfully.',
        products
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  /**
   * read specific record in storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param response 
   * @param id 
   * @returns 
   */
  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    try {
      const ExistingProduct = await this.productService.findOne(id);

      return response.status(HttpStatus.OK).json({
        message: 'Product found successfully.',
        ExistingProduct
      });
    } catch (error) {
     return response.status(error.status).json(error.response); 
    }
  }

  /**
   * updated specific record in storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param response 
   * @param id 
   * @param updateProductDto 
   * @returns products
   */
  @Patch(':id')
  async update(@Res() response, @Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      const updateProduct = await this.productService.update(id, updateProductDto);

      return response.status(HttpStatus.OK).json({
        message: 'Product updated successfully.',
        updateProduct
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  /**
   * delete specific record in storage
   * @param response 
   * @param id 
   * @returns []
   */
  @Delete(':id')
  async remove(@Res() response, @Param('id') id: string) {
    try {
      const deleteProduct = await this.productService.remove(id);

      return response.status(HttpStatus.OK).json({
        message: 'Product has been deleted successfully.',
        deleteProduct
      });
    } catch (error) {
      return response.status(error.status).json(error.json);
    }
  }
}
