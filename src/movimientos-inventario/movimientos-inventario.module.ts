import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientosInventarioService } from './movimientos-inventario.service';
import { MovimientosInventarioController } from './movimientos-inventario.controller';
import { MovimientoInventario } from './movimiento-inventario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientoInventario])],
  providers: [MovimientosInventarioService],
  controllers: [MovimientosInventarioController],
  exports: [MovimientosInventarioService],
})
export class MovimientosInventarioModule {}