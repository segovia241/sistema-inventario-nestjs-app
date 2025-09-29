import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('movimientos_inventario')
export class MovimientoInventario {
  @PrimaryGeneratedColumn({ name: 'id_movimiento' })
  id_movimiento: number;

  @Column('int', { name: 'id_producto' })
  id_producto: number;

  @Column('int', { name: 'tipo_movimiento' })
  tipo_movimiento: number; // 1=entrada, 2=salida, 3=ajuste

  @Column('int')
  cantidad: number;

  @Column('int', { name: 'unidad_medida' })
  unidad_medida: number; // 1=unidad, 2=kg, 3=g, 4=l, etc

  @Column('int', { name: 'stock_anterior' })
  stock_anterior: number;

  @Column('int', { name: 'stock_nuevo' })
  stock_nuevo: number;

  @Column('int', { nullable: true })
  referencia: number; // FK → id_compra/id_venta/ajuste

  @CreateDateColumn({ name: 'fecha_movimiento' })
  fecha_movimiento: Date;

  @Column('int', { name: 'id_usuario' })
  id_usuario: number;
}