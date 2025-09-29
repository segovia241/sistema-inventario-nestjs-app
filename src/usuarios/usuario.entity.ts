import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ length: 255, unique: true })
  email: string;

  @Column('text')
  password: string;

  @Column('int')
  rol: number; // 1=admin, 2=vendedor, 3=cajero

  @Column('int', { default: 1 })
  activo: number; // 0=inactivo, 1=activo

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;

  @Column({ type: 'timestamptz', nullable: true })
  last_login: Date;
}