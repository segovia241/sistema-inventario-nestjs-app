import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('marcas')
export class Marca {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;
}
