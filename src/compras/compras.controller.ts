import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { Compra } from './compra.entity';

@Controller('compras')
export class ComprasController {
  constructor(private readonly comprasService: ComprasService) {}

  @Post()
  create(@Body() compraData: Partial<Compra>) {
    return this.comprasService.create(compraData);
  }

  @Get()
  findAll() {
    return this.comprasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.comprasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() compraData: Partial<Compra>) {
    return this.comprasService.update(id, compraData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.comprasService.remove(id);
  }
}
