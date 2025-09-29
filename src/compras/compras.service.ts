import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compra } from './compra.entity';

@Injectable()
export class ComprasService {
  constructor(
    @InjectRepository(Compra)
    private compraRepo: Repository<Compra>,
  ) {}

  async create(compraData: Partial<Compra>): Promise<Compra> {
    const compra = this.compraRepo.create(compraData);
    return await this.compraRepo.save(compra);
  }

  async findAll(): Promise<Compra[]> {
    return await this.compraRepo.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: number): Promise<Compra> {
    const compra = await this.compraRepo.findOne({ where: { id_compra: id }, relations: ['detalles'] });
    if (!compra) throw new NotFoundException(`Compra ${id} no encontrada`);
    return compra;
  }

  async update(id: number, compraData: Partial<Compra>): Promise<Compra> {
    await this.compraRepo.update(id, compraData);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.compraRepo.delete(id);
  }
}
