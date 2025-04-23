import { Module } from '@nestjs/common';
import { MongoServiceController } from './mongo-service.controller';
import { MongoServiceService } from './mongo-service.service';

@Module({
  imports: [],
  controllers: [MongoServiceController],
  providers: [MongoServiceService],
})
export class MongoServiceModule {}
