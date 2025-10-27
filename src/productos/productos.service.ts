import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) {}

  async create(productoData: Partial<Producto>): Promise<Producto> {
    const producto = this.productoRepo.create(productoData);
    return await this.productoRepo.save(producto);
  }

  async findAll(): Promise<Producto[]> {
    return await this.productoRepo.find({
      where: { estado: 1 },
      order: { nombre: 'ASC' },
    });
  }


  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepo.findOne({ where: { id_producto: id } });
    if (!producto) throw new NotFoundException(`Producto ${id} no encontrado`);
    return producto;
  }

  async update(id: number, productoData: Partial<Producto>): Promise<Producto> {
    await this.productoRepo.update(id, productoData);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productoRepo.update(id, { estado: 0 });
  }

  async updateStock(id: number, nuevoStock: number): Promise<Producto> {
    await this.productoRepo.update(id, { stock_actual: nuevoStock });
    return await this.findOne(id);
  }

  async findLowStock(): Promise<Producto[]> {
    return await this.productoRepo
      .createQueryBuilder('producto')
      .where('producto.stock_actual <= producto.stock_minimo')
      .andWhere('producto.estado = 1')
      .getMany();
  }
}