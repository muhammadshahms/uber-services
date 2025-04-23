// apps/mysql-service/src/orders/orders.module.ts
import { Module } from '@nestjs/common';
import { KafkaModule } from '@app/kafka-client';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [KafkaModule],
  controllers: [OrdersController],
  providers: [OrdersService, PrismaService],
})
export class OrdersModule {}