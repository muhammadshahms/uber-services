import { Module } from '@nestjs/common';
import { MysqlServiceController } from './mysql-service.controller';
import { MysqlServiceService } from './mysql-service.service';
import { MysqlServiceController } from './mysql-service/mysql-service.controller';

@Module({
  imports: [],
  controllers: [MysqlServiceController],
  providers: [MysqlServiceService],
})
export class MysqlServiceModule {}
