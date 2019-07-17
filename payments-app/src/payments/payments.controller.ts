import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentsController {
  @MessagePattern({ cmd: 'payments' })
  test(data: string): any {
    console.log('payments ms api test got: ' + data);
    return data;
  }
}
