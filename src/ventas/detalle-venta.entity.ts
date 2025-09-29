import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Venta } from './venta.entity';

@Entity('detalle_venta')
export class DetalleVenta {
  @PrimaryGeneratedColumn({ name: 'id_detalle_venta' })
  id_detalle_venta: number;

  @Column('int', { name: 'id_venta' })
  id_venta: number;

  @Column('int', { name: 'id_producto' })
  id_producto: number;

  @Column('int')
  cantidad: number;

  @Column('int', { name: 'precio_unitario' })
  precio_unitario: number;

  @Column('int')
  subtotal: number;

  @ManyToOne(() => Venta, venta => venta.detalles)
  @JoinColumn({ name: 'id_venta' })
  venta: Venta;
}