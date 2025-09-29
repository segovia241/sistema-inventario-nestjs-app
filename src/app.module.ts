import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

// Importar los 7 módulos existentes
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MovimientosInventarioModule } from './movimientos-inventario/movimientos-inventario.module';
import { VentasModule } from './ventas/ventas.module';
import { ComprasModule } from './compras/compras.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ClientesModule } from './clientes/clientes.module';
import { MarcasModule } from './marcas/marcas.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres',
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USER || 'admin_inventario',
      password: process.env.DB_PASSWORD || 'Inventario123!',
      database: process.env.DB_NAME || 'inventario_hw',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')], // Glob para todas las entidades
      synchronize: true,
    }),
    ProductosModule,
    UsuariosModule,
    MovimientosInventarioModule,
    VentasModule,
    ComprasModule,
    ProveedoresModule,
    ClientesModule,
    MarcasModule,
    CategoriasModule,
  ],
})
export class AppModule {}
