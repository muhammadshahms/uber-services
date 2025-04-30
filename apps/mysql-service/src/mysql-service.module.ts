import { Module } from '@nestjs/common';
import { MysqlServiceService } from './mysql-service.service';
import { MysqlServiceController } from './mysql-service.controller';

@Module({
  imports: [],
  controllers: [MysqlServiceController],
  providers: [MysqlServiceService],
})
export class MysqlServiceModule {}
