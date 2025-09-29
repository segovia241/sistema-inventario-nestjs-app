import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marca } from './marca.entity';

@Injectable()
export class MarcasService {
  constructor(
    @InjectRepository(Marca)
    private marcaRepo: Repository<Marca>,
  ) { }

  async findAll(): Promise<Marca[]> {
    return await this.marcaRepo.find();
  }

  async getName(id: number): Promise<string> {
    const marca = await this.marcaRepo.findOne({ where: { id } });
    if (!marca) throw new NotFoundException('Marca no encontrada');
    return marca.nombre;
  }

  async create(marcaData: Partial<Marca>): Promise<Marca> {
    const existe = await this.marcaRepo.findOne({ where: { nombre: marcaData.nombre } });
    if (existe) throw new ConflictException('Marca ya existe');
    const marca = this.marcaRepo.create(marcaData);
    return await this.marcaRepo.save(marca);
  }

  async update(id: number, marcaData: Partial<Marca>): Promise<Marca> {
    const marca = await this.marcaRepo.findOne({ where: { id } });
    if (!marca) throw new NotFoundException('Marca no encontrada');
    await this.marcaRepo.update(id, marcaData);

    const marcaActualizada = await this.marcaRepo.findOne({ where: { id } });
    if (!marcaActualizada) throw new NotFoundException('Marca no encontrada después de actualizar');
    return marcaActualizada;
  }

  async remove(id: number): Promise<void> {
    await this.marcaRepo.delete(id);
  }
}
