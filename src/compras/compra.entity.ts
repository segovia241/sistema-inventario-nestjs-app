import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { DetalleCompra } from './detalle-compra.entity';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn({ name: 'id_compra' })
  id_compra: number;

  @CreateDateColumn({ name: 'fecha_compra' })
  fecha_compra: Date;

  @Column('int', { name: 'id_proveedor' })
  id_proveedor: number;

  @Column('int', { name: 'id_usuario' })
  id_usuario: number;

  @Column('int', { name: 'monto_total' })
  monto_total: number;

  @Column('int', { name: 'metodo_pago' })
  metodo_pago: number;

  @Column({ length: 50, nullable: true, name: 'numero_factura' })
  numero_factura: string;

  @Column('text', { nullable: true })
  notas: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @OneToMany(() => DetalleCompra, detalle => detalle.compra)
  detalles: DetalleCompra[];
}