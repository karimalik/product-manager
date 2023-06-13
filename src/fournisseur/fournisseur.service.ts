import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFournisseurDto } from './dto/create-fournisseur.dto';
import { UpdateFournisseurDto } from './dto/update-fournisseur.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Fournisseur, FournisseurDocument } from './schemas/fournisseur.schema';
import { Model } from 'mongoose';

@Injectable()
export class FournisseurService {
  constructor(
    @InjectModel(Fournisseur.name)
    private readonly fournisseurModel: Model<FournisseurDocument>,
  ) {}
  
  /**
   * Insert new record in the storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param createFournisseurDto 
   * @returns fournisseur
   */
  async create(
    createFournisseurDto: CreateFournisseurDto,
  ): Promise<FournisseurDocument> {
    const fournisseur = await new this.fournisseurModel(createFournisseurDto);

    return fournisseur.save();
  }

  /**
   * read all record in the storage
   * @author karim komnpissi <karimkompissi@gmail.com>  
   * @returns allFournisseur
   */
  async findAll(): Promise<FournisseurDocument[]> {
    const allFournisseur = await this.fournisseurModel.find().exec();

    if (!allFournisseur || allFournisseur.length == 0) {
      throw new NotFoundException('No data in the storage!');
    }

    return allFournisseur;
  }

  /**
   * read specific record in the storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param id 
   * @returns fournisseurExisting
   */
  async findOne(id: string) {
    const fournisseurExisting = await this.fournisseurModel.findById(id);

    if (!fournisseurExisting) {
      throw new NotFoundException('Fournisseur does not exist in the storage.');
    }

    return fournisseurExisting;
  }

  /**
   * update specific record in the storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param id 
   * @param updateFournisseurDto 
   * @returns updateFournisseur
   */
  async update(
    id: string,
    updateFournisseurDto: UpdateFournisseurDto,
  ): Promise<FournisseurDocument> {
    const updateFournisseur = await this.fournisseurModel.findByIdAndUpdate(
      id,
      updateFournisseurDto,
      { new: true },
    );

    if (!updateFournisseur) {
      throw new NotFoundException('Fournisseur does not exist in the storage.');
    }

    return updateFournisseur;
  }

  /**
   * delete specific record in the storage
   * @author karim kompissi <karimkompissi@gmail.com>
   * @param id 
   * @returns deleteFournisseur
   */
  async remove(id: string) {
    const deleteFournisseur = await this.fournisseurModel.findByIdAndRemove(id);

    if (!deleteFournisseur) {
      throw new NotFoundException('Fournisseur does not exist in the storage.');
    }

    return deleteFournisseur;
  }
}
