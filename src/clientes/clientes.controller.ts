import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.entity';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() clienteData: Partial<Cliente>) {
    return this.clientesService.create(clienteData);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.clientesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() clienteData: Partial<Cliente>) {
    return this.clientesService.update(id, clienteData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clientesService.remove(id);
  }
}
