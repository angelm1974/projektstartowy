import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { UzytkownicyService } from './uzytkownicy.service';
import { Uzytkownik } from './schemas/uzytkownik.schema';

@Controller('uzytkownicy')
export class UzytkownicyController {
  constructor(private readonly uzytkownicyService: UzytkownicyService) {}

  @Post()
  @ApiParam({ name: 'imie', type: String })
  @ApiParam({ name: 'nazwisko', type: String })
  @ApiParam({ name: 'wiek', type: Number })
  async addUzytkownik(@Body() createuzytkownikDto: Uzytkownik) {
    return this.uzytkownicyService.addUzytkownik(createuzytkownikDto);
  }

  @Get()
  async getAllUzytkownicy(): Promise<Uzytkownik[]> {
    return this.uzytkownicyService.getAllUzytkownicy();
  }

  @Get(':id')
  getUzytkownik(@Param('id') uzytId: string) {
    return this.uzytkownicyService.getUzytkownik(uzytId);
  }

  @Patch(':id')
  @ApiParam({ name: 'imie', type: String })
  @ApiParam({ name: 'nazwisko', type: String })
  @ApiParam({ name: 'wiek', type: Number })
  updateUzytkownik(
    @Param('id') uzytId: string,
    @Body() createuzytkownikDto: Uzytkownik,
  ) {
    return this.uzytkownicyService.updateUzytkownik(
      uzytId,
      createuzytkownikDto,
    );
  }

  @Delete(':id')
  removeUzytkownik(@Param('id') uzytId: string) {
    this.uzytkownicyService.deleteUzytkownik(uzytId);
    return null;
  }
}
