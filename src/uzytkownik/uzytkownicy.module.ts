import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UzytkownicyController } from './uzytkownicy.controller';
import { UzytkownicyService } from './uzytkownicy.service';
import { Uzytkownik, UzytkownikSchema } from './schemas/uzytkownik.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Uzytkownik.name, schema: UzytkownikSchema },
    ]),
  ],
  controllers: [UzytkownicyController],
  providers: [UzytkownicyService],
})
export class UzytkownicyModule {}
