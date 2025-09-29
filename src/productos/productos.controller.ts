import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() productoData: Partial<Producto>) {
    return this.productosService.create(productoData);
  }

  @Get()
  findAll() {
    return this.productosService.findAll();
  }

  @Get('bajo-stock')
  findLowStock() {
    return this.productosService.findLowStock();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() productoData: Partial<Producto>) {
    return this.productosService.update(id, productoData);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.remove(id);
  }

  @Put(':id/stock')
  updateStock(@Param('id', ParseIntPipe) id: number, @Body('stock') stock: number) {
    return this.productosService.updateStock(id, stock);
  }
}