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
import { ProduktService } from './produkt.service';
import { Produkt } from './schemas/produkt.schema';

@Controller('produkt')
export class ProduktController {
  constructor(private readonly produktService: ProduktService) {}

  @Post()
  @ApiParam({ name: 'nazwa', type: String })
  @ApiParam({ name: 'kategoria', type: String })
  @ApiParam({ name: 'cena', type: Number })
  @ApiParam({ name: 'dostepnosc', type: Boolean })
  async addProdukt(@Body() createproduktDto: Produkt) {
    return this.produktService.addProdukt(createproduktDto);
  }

  @Get()
  async getAllProdukt(): Promise<Produkt[]> {
    return this.produktService.getAllProdukty();
  }

  @Get(':id')
  getProdukt(@Param('id') Id: string) {
    return this.produktService.getProdukt(Id);
  }

  @Patch(':id')
  @ApiParam({ name: 'nazwa', type: String })
  @ApiParam({ name: 'kategoria', type: String })
  @ApiParam({ name: 'cena', type: Number })
  @ApiParam({ name: 'dostepnosc', type: Boolean })
  updateProdukt(@Param('id') Id: string, @Body() createproduktDto: Produkt) {
    return this.produktService.updateProdukt(Id, createproduktDto);
  }

  @Delete(':id')
  removeProdukt(@Param('id') Id: string) {
    this.produktService.deleteProdukt(Id);
    return null;
  }
}
