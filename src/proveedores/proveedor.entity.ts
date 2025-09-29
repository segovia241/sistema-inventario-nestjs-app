import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('proveedores')
export class Proveedor {
  @PrimaryGeneratedColumn({ name: 'id_proveedor' })
  id_proveedor: number;

  @Column({ length: 255, name: 'razon_social' })
  razon_social: string;

  @Column({ length: 20, nullable: true, name: 'ruc_dni' })
  ruc_dni: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column('text', { nullable: true })
  direccion: string;

  @Column('text', { nullable: true })
  notas: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}