import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { FournisseurService } from './fournisseur.service';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fournisseur resource')
@Controller('fournisseur')
export class FournisseurController {
  constructor(private readonly fournisseurService: FournisseurService) {}

  /**
   * create new record in the storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param response
   * @param createFournisseurDto
   * @returns newFournisseur
   */
  @Post()
  async create(
    @Res() response,
    @Body() createFournisseurDto: CreateFournisseurDto,
  ) {
    try {
      const newFournisseur = await this.fournisseurService.create(
        createFournisseurDto,     
      );

      return response.status(HttpStatus.CREATED).json({
        message: 'Fournisseur has been created successfully',
        newFournisseur,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Fournisseur not created!',
        error: 'Bad Request',
      });
    }
  }

  /**
   * listing all record in the storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param response
   * @returns allFournisseur
   */
  @Get()
  async findAll(@Res() response) {
    try {
      const allFournisseur = await this.fournisseurService.findAll();

      return response.status(HttpStatus.OK).json({
        message: 'All Fournisseur found successfully',
        allFournisseur,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  /**
   * listing specific record in the storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param response
   * @param id
   * @returns fournisseurExisting
   */
  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    try {
      const fournisseurExisting = await this.fournisseurService.findOne(id);

      return response.status(HttpStatus.OK).json({
        message: 'Fournisseur found successfully',
        fournisseurExisting,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  /**
   * update the record
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param response
   * @param id
   * @param updateFournisseurDto
   * @returns updateFournisseur
   */
  @Patch(':id')
  async update(
    @Res() response,
    @Param('id') id: string,
    @Body() updateFournisseurDto: UpdateFournisseurDto,
  ) {
    try {
      const updateFournisseur = await this.fournisseurService.update(
        id,
        updateFournisseurDto,
      );

      return response.status(HttpStatus.OK).json({
        message: 'Fournisseur updated successfully!',
        updateFournisseur,
      });
    } catch (error) {
      return response.status(error.status).json(error.response);
    }
  }

  /**
   * deleted the record in the storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param response 
   * @param id 
   * @returns []
   */
  @Delete(':id')
  async remove(@Res() response, @Param('id') id: string) {
    try {
      const deleteFournisseur = await this.fournisseurService.remove(id);

      return response.status(HttpStatus.OK).json({
        message: 'Fournisseur has been deleted successfully',
        deleteFournisseur
      });
    } catch (error) {
     return response.status(error.status).json(error.response); 
    }
  }
}
