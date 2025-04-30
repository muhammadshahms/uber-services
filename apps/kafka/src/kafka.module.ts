import { Module, Global, DynamicModule } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaService } from './kafka.service';

@Global()
@Module({})
export class KafkaModule {
  static register(options: { clientId: string; brokers: string[] }): DynamicModule {
    return {
      module: KafkaModule,
      imports: [
        ClientsModule.register([
          {
            name: 'KAFKA_SERVICE',
            transport: Transport.KAFKA,
            options: {
              client: {
                clientId: options.clientId,
                brokers: options.brokers,
              },
              consumer: {
                groupId: `consumer-${options.clientId}`,
              },
            },
          },
        ]),
      ],
      providers: [KafkaService],
      exports: [KafkaService],
    };
  }
} 