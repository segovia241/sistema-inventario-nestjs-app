import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { Compra } from './compra.entity';
import { DetalleCompra } from './detalle-compra.entity';
import { ProductosModule } from '../productos/productos.module';
import { ProveedoresModule } from '../proveedores/proveedores.module';
import { MovimientosInventarioModule } from '../movimientos-inventario/movimientos-inventario.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Compra, DetalleCompra]),
    forwardRef(() => ProductosModule),
    ProveedoresModule,
    MovimientosInventarioModule,
  ],
  providers: [ComprasService],
  controllers: [ComprasController],
  exports: [ComprasService],
})
export class ComprasModule {}