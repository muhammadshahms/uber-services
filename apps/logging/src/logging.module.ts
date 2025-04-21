import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinateModule } from './rider-coordinate/rider-coordinate.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://root:root@localhost:27017/log_db?authSource=admin'), RiderCoordinateModule],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule { }

// 'mongodb://localhost:27017/logging-service',