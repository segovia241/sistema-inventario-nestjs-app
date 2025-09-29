import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>,
  ) { }

  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepo.find();
  }

  async getName(id: number): Promise<string> {
    const categoria = await this.categoriaRepo.findOne({ where: { id } });
    if (!categoria) throw new NotFoundException('Categoría no encontrada');
    return categoria.nombre;
  }

  async create(categoriaData: Partial<Categoria>): Promise<Categoria> {
    const existe = await this.categoriaRepo.findOne({ where: { nombre: categoriaData.nombre } });
    if (existe) throw new ConflictException('Categoría ya existe');
    const categoria = this.categoriaRepo.create(categoriaData);
    return await this.categoriaRepo.save(categoria);
  }

  async update(id: number, categoriaData: Partial<Categoria>): Promise<Categoria> {
    const categoria = await this.categoriaRepo.findOne({ where: { id } });
    if (!categoria) throw new NotFoundException('Categoría no encontrada');
    await this.categoriaRepo.update(id, categoriaData);

    const categoriaActualizada = await this.categoriaRepo.findOne({ where: { id } });
    if (!categoriaActualizada) throw new NotFoundException('Categoría no encontrada después de actualizar');
    return categoriaActualizada;
  }

  async remove(id: number): Promise<void> {
    await this.categoriaRepo.delete(id);
  }
}
