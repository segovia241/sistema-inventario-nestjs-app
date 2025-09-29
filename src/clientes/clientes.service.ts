import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepo: Repository<Cliente>,
  ) {}

  async create(clienteData: Partial<Cliente>): Promise<Cliente> {
    const cliente = this.clienteRepo.create(clienteData);
    return await this.clienteRepo.save(cliente);
  }

  async findAll(): Promise<Cliente[]> {
    return await this.clienteRepo.find({ order: { nombre_completo: 'ASC' } });
  }

  async findOne(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepo.findOne({ where: { id_cliente: id } });
    if (!cliente) throw new NotFoundException(`Cliente ${id} no encontrado`);
    return cliente;
  }

  async update(id: number, clienteData: Partial<Cliente>): Promise<Cliente> {
    await this.clienteRepo.update(id, clienteData);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.clienteRepo.delete(id);
  }
}