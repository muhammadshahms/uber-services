import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../schemas/product.schema';
import { KafkaModule } from 'apps/kafka/src/kafka.module';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017'),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    KafkaModule.register({
      clientId: 'products-service',
      brokers: ['localhost:9092'], // Update with your Kafka broker addresses
    }),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductsModule {}