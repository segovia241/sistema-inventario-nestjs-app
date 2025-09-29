import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { DetalleVenta } from './detalle-venta.entity';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn({ name: 'id_venta' })
  id_venta: number;

  @CreateDateColumn({ name: 'fecha_venta' })
  fecha_venta: Date;

  @Column('int', { name: 'id_cliente' })
  id_cliente: number;

  @Column('int', { name: 'id_usuario' })
  id_usuario: number;

  @Column('int', { name: 'monto_total' })
  monto_total: number;

  @Column('int', { name: 'metodo_pago' })
  metodo_pago: number; // 1=efectivo, 2=tarjeta, 3=transferencia

  @Column('int', { name: 'tipo_comprobante' })
  tipo_comprobante: number; // 1=boleta, 2=factura

  @Column({ length: 50, name: 'numero_comprobante' })
  numero_comprobante: string;

  @Column('text', { nullable: true })
  notas: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @OneToMany(() => DetalleVenta, detalle => detalle.venta)
  detalles: DetalleVenta[];
}