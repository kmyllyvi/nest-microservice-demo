import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Order } from './models/order.model';
import { OrdersService } from './orders.service';

@Controller('orders')
@ApiUseTags(Order.modelName)
// @ApiBearerAuth()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  // TEST MS
  async testMS(): Promise<void> {
    try {
      // send ms message
      console.log('TEST microservice');
      const response = await this.ordersService.testMicroService();
      console.log('got resp: ' + response);
    } catch (e) {
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
