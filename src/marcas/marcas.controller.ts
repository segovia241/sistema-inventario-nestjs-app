import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { Marca } from './marca.entity';

@Controller('marca')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @Get()
  findAll() {
    return this.marcasService.findAll();
  }

  @Get(':id')
  getName(@Param('id', ParseIntPipe) id: number) {
    return this.marcasService.getName(id);
  }

  @Post()
  create(@Body() marcaData: Partial<Marca>) {
    return this.marcasService.create(marcaData);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() marcaData: Partial<Marca>) {
    return this.marcasService.update(id, marcaData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.marcasService.remove(id);
  }
}
