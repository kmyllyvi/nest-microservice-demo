import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationService } from 'src/common/configuration/configuration/configuration.service';
import { ItemsModule } from 'src/items/items.module';
import { ItemsService } from 'src/items/items.service';
import { Order } from './models/order.model';
import { OrdersController } from './orders.controller';
import { MICROSERVICE_NAME, OrdersService } from './orders.service';

const paymentsPort: number = 4000;
const dockerContainerName: string = 'payments-container';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.modelName, schema: Order.model.schema },
    ]),
    ItemsModule,
    ClientsModule.register([
      {
        name: MICROSERVICE_NAME,
        transport: Transport.TCP,
        options: { port: paymentsPort, host: dockerContainerName },
      },
    ]),
  ],
  controllers: [OrdersController],
  providers: [OrdersService, ItemsService, ConfigurationService],
})
export class OrdersModule {}
