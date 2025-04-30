import { NestFactory } from '@nestjs/core';
import { KafkaModule } from './kafka.module';

async function bootstrap() {
  const app = await NestFactory.create(KafkaModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
