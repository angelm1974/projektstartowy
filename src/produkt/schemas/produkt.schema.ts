import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  collection: 'produkty',
})
export class Produkt {
  @Prop()
  nazwa: string;

  @Prop()
  kategoria: string;

  @Prop()
  cena: number;

  @Prop()
  dostepnosc: boolean;
}

export const ProduktSchema = SchemaFactory.createForClass(Produkt);
