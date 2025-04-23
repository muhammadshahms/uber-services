import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_CONFIG } from 'libs/common/src/kafka.config';

@Module({
  imports: [
    ClientsModule.register([{
      name: 'ORDER_SERVICE',
      ...KAFKA_CONFIG,
    }]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
