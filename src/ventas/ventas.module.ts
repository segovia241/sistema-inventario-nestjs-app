import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { Venta } from './venta.entity';
import { DetalleVenta } from './detalle-venta.entity';
import { ProductosModule } from '../productos/productos.module';
import { ClientesModule } from '../clientes/clientes.module';
import { MovimientosInventarioModule } from '../movimientos-inventario/movimientos-inventario.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Venta, DetalleVenta]),
    forwardRef(() => ProductosModule),
    ClientesModule,
    MovimientosInventarioModule,
  ],
  providers: [VentasService],
  controllers: [VentasController],
  exports: [VentasService],
})
export class VentasModule {}