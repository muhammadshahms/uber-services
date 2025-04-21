import { NestFactory } from '@nestjs/core';
import { LoggingModule } from './logging.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(LoggingModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    validationError: { target: false },
    skipMissingProperties: false,
  }));
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
