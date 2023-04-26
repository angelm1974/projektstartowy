import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Uzytkownik } from './schemas/uzytkownik.schema';

@Injectable()
export class UzytkownicyService {
  // private uzytkownicy: Uzytkownik[] = [];
  constructor(
    @InjectModel(Uzytkownik.name)
    private readonly uzytkownikModel: mongoose.Model<Uzytkownik>,
  ) {}

  async addUzytkownik(createuzytkownikDto: Uzytkownik) {
    const newUzytkownik = new this.uzytkownikModel(createuzytkownikDto);
    return newUzytkownik.save();
  }

  async getAllUzytkownicy(): Promise<Uzytkownik[]> {
    const uzytkownicy = await this.uzytkownikModel.find();
    return uzytkownicy;
  }

  async getUzytkownik(uzytId: string): Promise<Uzytkownik> {
    const uzytkownik = await this.uzytkownikModel.findById(uzytId);
    return uzytkownik;
  }

  async updateUzytkownik(uzytId: string, createuzytkownikDto: Uzytkownik) {
    const updatedUzytkownik = await this.uzytkownikModel.findByIdAndUpdate(
      { _id: uzytId },
      createuzytkownikDto,
      { new: true },
    );
    return updatedUzytkownik;
  }
  async deleteUzytkownik(uzytId: string) {
    this.uzytkownikModel.deleteOne({ _id: uzytId }).exec();
  }
}
