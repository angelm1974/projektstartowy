import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  collection: 'uzytkownicy',
})
export class Uzytkownik {
  @Prop()
  imie: string;

  @Prop()
  nazwisko: string;

  @Prop()
  wiek: number;
}

export const UzytkownikSchema = SchemaFactory.createForClass(Uzytkownik);
