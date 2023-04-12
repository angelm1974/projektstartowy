import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UzytkownicyModule } from './uzytkownik/uzytkownicy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.DB_SRODA),
    UzytkownicyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
