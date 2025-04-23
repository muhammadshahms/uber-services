import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
// import { CreateOrderDto } from '@app/common';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createOrderDto: any) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }
}