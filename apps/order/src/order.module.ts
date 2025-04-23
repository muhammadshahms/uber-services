import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { KAFKA_CONFIG } from 'libs/common/src/kafka.config';
import { Order, OrderSchema } from './schema/order.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/orders'),
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    ClientsModule.register([{
      name: 'PAYMENT_SERVICE',
      ...KAFKA_CONFIG,
    }]),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})


export class OrderModule {}
