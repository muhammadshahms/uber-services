import { Controller, Post } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @EventPattern('order_created')
  async handleOrderCreated(@Payload() data: any) {
    const { orderId, price, quantity } = data;
    const amount = price * quantity;
    await this.paymentService.processPayment(orderId, amount);
  }
}