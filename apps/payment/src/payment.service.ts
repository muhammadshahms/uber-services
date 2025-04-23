import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class PaymentService extends PrismaClient implements OnModuleInit {
  constructor(
    @Inject('ORDER_SERVICE') private orderClient: ClientKafka,
  ) {
    super();
  }

  async onModuleInit() {
    await this.$connect();
    this.orderClient.subscribeToResponseOf('order_created');
  }

  async processPayment(orderId: string, amount: number) {
    // In a real app, you would integrate with a payment gateway here
    const payment = await this.payment.create({
      data: {
        orderId,
        amount,
        status: 'completed',
      },
    });

    // Notify order service about payment completion
    this.orderClient.emit('payment_processed', {
      orderId,
      paymentId: payment.id,
      status: 'completed',
    });

    return payment;
  }
}