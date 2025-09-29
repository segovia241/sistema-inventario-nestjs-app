// movimientos-inventario.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { MovimientosInventarioService } from './movimientos-inventario.service';
import { MovimientoInventario } from './movimiento-inventario.entity';

@Controller('movimientos-inventario')
export class MovimientosInventarioController {
  constructor(private readonly movimientosService: MovimientosInventarioService) {}

  @Post()
  create(@Body() movimientoData: Partial<MovimientoInventario>) {
    return this.movimientosService.create(movimientoData);
  }

  @Get()
  findAll() {
    return this.movimientosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.movimientosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() movimientoData: Partial<MovimientoInventario>) {
    return this.movimientosService.update(id, movimientoData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.movimientosService.remove(id);
  }
}
