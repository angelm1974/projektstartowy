import { Module } from '@nestjs/common';
import { ProduktController } from './produkt.controller';
import { ProduktService } from './produkt.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Produkt, ProduktSchema } from './schemas/produkt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Produkt.name, schema: ProduktSchema }]),
  ],
  controllers: [ProduktController],
  providers: [ProduktService],
})
export class ProduktModule {}
