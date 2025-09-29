import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Compra } from './compra.entity';

@Entity('detalle_compra')
export class DetalleCompra {
  @PrimaryGeneratedColumn({ name: 'id_detalle_compra' })
  id_detalle_compra: number;

  @Column('int', { name: 'id_compra' })
  id_compra: number;

  @Column('int', { name: 'id_producto' })
  id_producto: number;

  @Column('int')
  cantidad: number;

  @Column('int', { name: 'precio_unitario' })
  precio_unitario: number;

  @Column('int')
  subtotal: number;

  @ManyToOne(() => Compra, compra => compra.detalles)
  @JoinColumn({ name: 'id_compra' })
  compra: Compra;
}