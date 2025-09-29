import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn({ name: 'id_producto' })
  id_producto: number;

  @Column({ length: 50, unique: true })
  codigo: string;

  @Column({ length: 255 })
  nombre: string;

  @Column('text', { nullable: true })
  descripcion: string;

  @Column('int', { nullable: true })
  categoria: number;

  @Column('int', { nullable: true })
  marca: number;

  @Column({ length: 100, nullable: true })
  modelo: string;

  @Column('int')
  precio_compra: number;

  @Column('int')
  precio_venta: number;

  @Column('int', { name: 'stock_actual' })
  stock_actual: number;

  @Column('int', { name: 'stock_minimo', default: 0 })
  stock_minimo: number;

  @Column('int')
  unidad_medida: number; // 1=unidad, 2=kg, 3=g, 4=l, etc

  @Column('int', { default: 1 })
  estado: number; // 0=inactivo, 1=activo

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}