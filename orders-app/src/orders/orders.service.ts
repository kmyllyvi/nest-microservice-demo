import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { BaseService } from 'src/common/base/base.service';
import { Order } from './models/order.model';

export const MICROSERVICE_NAME = 'payments_microservice';

@Injectable()
export class OrdersService extends BaseService<Order> {
  constructor(
    @Inject(MICROSERVICE_NAME) private readonly microserviceClient: ClientProxy,
  ) {
    super();
  }

  async testMicroService(): Promise<void> {
    const msCmdPattern: any = { cmd: 'payments' };
    return this.microserviceClient
      .send<any>(msCmdPattern, 'hi there')
      .toPromise();
  }
}
