import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Produkt } from './schemas/produkt.schema';

@Injectable()
export class ProduktService {
  // private uzytkownicy: Produkt[] = [];
  constructor(
    @InjectModel(Produkt.name)
    private readonly produktModel: mongoose.Model<Produkt>,
  ) {}

  async addProdukt(createproduktDto: Produkt) {
    const newProdukt = new this.produktModel(createproduktDto);
    return newProdukt.save();
  }

  async getAllProdukty(): Promise<Produkt[]> {
    const uzytkownicy = await this.produktModel.find();
    return uzytkownicy;
  }

  async getProdukt(Id: string): Promise<Produkt> {
    const produkt = await this.produktModel.findById(Id);
    return produkt;
  }

  async updateProdukt(Id: string, createproduktDto: Produkt) {
    const updatedProdukt = await this.produktModel.findByIdAndUpdate(
      { _id: Id },
      createproduktDto,
      { new: true },
    );
    return updatedProdukt;
  }
  async deleteProdukt(Id: string) {
    this.produktModel.deleteOne({ _id: Id }).exec();
  }
}
