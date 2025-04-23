import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { ClientKafka } from '@nestjs/microservices';
import { Order } from './schema/order.schema';
// import { CreateOrderDto } from '@app/common';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<Order>,
    @Inject('PAYMENT_SERVICE') private paymentClient: ClientKafka,
  ) {}

  async create(createOrderDto: any) {
    const order = new this.orderModel(createOrderDto);
    await order.save();
    
    // Emit event to Kafka
    this.paymentClient.emit('order_created', {
      orderId: order.id,
      ...createOrderDto,
    });

    return order;
  }

  async findAll() {
    return this.orderModel.find().exec();
  }
}