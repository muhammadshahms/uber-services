import { NestFactory } from '@nestjs/core';
import { MysqlServiceModule } from './mysql-service.module';

async function bootstrap() {
  const app = await NestFactory.create(MysqlServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
