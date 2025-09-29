import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepo: Repository<Usuario>,
  ) {}

  async create(usuarioData: Partial<Usuario>): Promise<Usuario> {
    const existe = await this.usuarioRepo.findOne({ where: { email: usuarioData.email } });
    if (existe) throw new ConflictException('Email ya registrado');

    if (usuarioData.password) {
      usuarioData.password = await bcrypt.hash(usuarioData.password, 10);
    }

    const usuario = this.usuarioRepo.create(usuarioData);
    return await this.usuarioRepo.save(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepo.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepo.findOne({ where: { id } });
    if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return usuario;
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return await this.usuarioRepo.findOne({
        where: { email }
    });
    }


  async update(id: number, usuarioData: Partial<Usuario>): Promise<Usuario> {
    await this.findOne(id);
    if (usuarioData.password) {
      usuarioData.password = await bcrypt.hash(usuarioData.password, 10);
    }
    await this.usuarioRepo.update(id, usuarioData);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepo.update(id, { activo: 0 });
  }

  async verificarPassword(email: string, password: string): Promise<boolean> {
    const usuario = await this.findByEmail(email);
    if (!usuario) return false;
    return await bcrypt.compare(password, usuario.password);
  }
}