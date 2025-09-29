// proveedores.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './proveedor.entity';

@Injectable()
export class ProveedoresService {
  constructor(
    @InjectRepository(Proveedor)
    private proveedorRepo: Repository<Proveedor>,
  ) {}

  async create(proveedorData: Partial<Proveedor>): Promise<Proveedor> {
    const proveedor = this.proveedorRepo.create(proveedorData);
    return await this.proveedorRepo.save(proveedor);
  }

  async findAll(): Promise<Proveedor[]> {
    return await this.proveedorRepo.find({ order: { razon_social: 'ASC' } });
  }

  async findOne(id: number): Promise<Proveedor> {
    const proveedor = await this.proveedorRepo.findOne({ where: { id_proveedor: id } });
    if (!proveedor) throw new NotFoundException(`Proveedor ${id} no encontrado`);
    return proveedor;
  }

  async update(id: number, proveedorData: Partial<Proveedor>): Promise<Proveedor> {
    await this.proveedorRepo.update(id, proveedorData);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.proveedorRepo.delete(id);
  }
}
