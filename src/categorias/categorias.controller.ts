import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.entity';

@Controller('categoria')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  getName(@Param('id', ParseIntPipe) id: number) {
    return this.categoriasService.getName(id);
  }

  @Post()
  create(@Body() categoriaData: Partial<Categoria>) {
    return this.categoriasService.create(categoriaData);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() categoriaData: Partial<Categoria>) {
    return this.categoriasService.update(id, categoriaData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriasService.remove(id);
  }
}
