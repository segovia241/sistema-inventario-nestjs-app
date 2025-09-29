import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  create(@Body() usuarioData: Partial<Usuario>) {
    return this.usuariosService.create(usuarioData);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() usuarioData: Partial<Usuario>) {
    return this.usuariosService.update(id, usuarioData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usuariosService.remove(id);
  }

  @Post('verificar')
  async verificarPassword(@Body() body: { email: string; password: string }) {
    const user = await this.usuariosService.findByEmail(body.email);

    if (!user) {
      // Usuario no existe
      return { valido: false };
    }

    const passwordCorrecta = await this.usuariosService.verificarPassword(body.email, body.password);

    if (!passwordCorrecta || user.activo === 0) {
      // Contraseña incorrecta o usuario inactivo
      return { valido: false };
    }

    // Login exitoso: devolvemos el usuario completo
    return { valido: true, user };
  }


}