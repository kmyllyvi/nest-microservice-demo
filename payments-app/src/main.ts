import { Transport } from '@nestjs/common/enums/transport.enum';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const msPort: number = 4000;

  const opts: any = {
    port: msPort,
  };
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: opts,
  });
  app.listen(() => console.log('Payments is ready on: ' + msPort));
}
bootstrap();
