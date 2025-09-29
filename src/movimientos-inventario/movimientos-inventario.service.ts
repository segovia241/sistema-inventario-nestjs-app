// movimientos-inventario.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimientoInventario } from './movimiento-inventario.entity';

@Injectable()
export class MovimientosInventarioService {
  constructor(
    @InjectRepository(MovimientoInventario)
    private movimientoRepo: Repository<MovimientoInventario>,
  ) {}

  async create(movimientoData: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
    const movimiento = this.movimientoRepo.create(movimientoData);
    return await this.movimientoRepo.save(movimiento);
  }

  async findAll(): Promise<MovimientoInventario[]> {
    return await this.movimientoRepo.find({ order: { fecha_movimiento: 'DESC' } });
  }

  async findOne(id: number): Promise<MovimientoInventario> {
    const movimiento = await this.movimientoRepo.findOne({ where: { id_movimiento: id } });
    if (!movimiento) throw new NotFoundException(`Movimiento ${id} no encontrado`);
    return movimiento;
  }

  async update(id: number, movimientoData: Partial<MovimientoInventario>): Promise<MovimientoInventario> {
    await this.movimientoRepo.update(id, movimientoData);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.movimientoRepo.delete(id);
  }
}
