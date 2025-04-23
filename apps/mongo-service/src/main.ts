import { NestFactory } from '@nestjs/core';
import { MongoServiceModule } from './mongo-service.module';

async function bootstrap() {
  const app = await NestFactory.create(MongoServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
