import { KafkaOptions, Transport } from '@nestjs/microservices';

export const KAFKA_CONFIG: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'nestjs-group',
    },
  },
};