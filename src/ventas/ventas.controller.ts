// ventas.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { Venta } from './venta.entity';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post()
  create(@Body() ventaData: Partial<Venta>) {
    return this.ventasService.create(ventaData);
  }

  @Get()
  findAll() {
    return this.ventasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ventasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() ventaData: Partial<Venta>) {
    return this.ventasService.update(id, ventaData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ventasService.remove(id);
  }
}
