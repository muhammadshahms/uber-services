import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class KafkaService implements OnModuleInit {
  constructor(@Inject('KAFKA_SERVICE') private readonly client: ClientKafka) {}

  async onModuleInit() {
    // Subscribe to response topics if needed
    // This ensures the client is connected
    Object.values(['topic1', 'topic2']).forEach((topic) => {
      this.client.subscribeToResponseOf(topic);
    });
    await this.client.connect();
  }

  emit(topic: string, data: any): Observable<any> {
    return this.client.emit(topic, data);
  }

  async send(topic: string, data: any): Promise<any> {
    return lastValueFrom(this.client.send(topic, data));
  }
}