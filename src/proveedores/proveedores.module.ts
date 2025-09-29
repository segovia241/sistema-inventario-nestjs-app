import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedoresService } from './proveedores.service';
import { ProveedoresController } from './proveedores.controller';
import { Proveedor } from './proveedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proveedor])],
  providers: [ProveedoresService],
  controllers: [ProveedoresController],
  exports: [ProveedoresService],
})
export class ProveedoresModule {}