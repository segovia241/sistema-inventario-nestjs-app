// proveedores.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ProveedoresService } from './proveedores.service';
import { Proveedor } from './proveedor.entity';

@Controller('proveedores')
export class ProveedoresController {
  constructor(private readonly proveedoresService: ProveedoresService) {}

  @Post()
  create(@Body() proveedorData: Partial<Proveedor>) {
    return this.proveedoresService.create(proveedorData);
  }

  @Get()
  findAll() {
    return this.proveedoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.proveedoresService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() proveedorData: Partial<Proveedor>) {
    return this.proveedoresService.update(id, proveedorData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.proveedoresService.remove(id);
  }
}
