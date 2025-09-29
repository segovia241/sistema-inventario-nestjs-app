import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 👇 Habilitar CORS para todos los orígenes
  app.enableCors({
    origin: '*',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
