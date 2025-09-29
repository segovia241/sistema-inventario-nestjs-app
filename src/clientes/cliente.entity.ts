import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn({ name: 'id_cliente' })
  id_cliente: number;

  @Column({ length: 255, name: 'nombre_completo' })
  nombre_completo: string;

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