// ventas.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './venta.entity';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private ventaRepo: Repository<Venta>,
  ) {}

  async create(ventaData: Partial<Venta>): Promise<Venta> {
    const venta = this.ventaRepo.create(ventaData);
    return await this.ventaRepo.save(venta);
  }

  async findAll(): Promise<Venta[]> {
    return await this.ventaRepo.find({ order: { created_at: 'DESC' } });
  }

  async findOne(id: number): Promise<Venta> {
    const venta = await this.ventaRepo.findOne({ where: { id_venta: id }, relations: ['detalles'] });
    if (!venta) throw new NotFoundException(`Venta ${id} no encontrada`);
    return venta;
  }

  async update(id: number, ventaData: Partial<Venta>): Promise<Venta> {
    await this.ventaRepo.update(id, ventaData);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.ventaRepo.delete(id);
  }
}
