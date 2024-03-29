import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
    }),
  );
  app.enableCors();
  app.setGlobalPrefix('api');

  
  
  app.useGlobalPipes(
    new ValidationPipe({ always: true, transform: true, whitelist: false }),
  );


  await app.listen(3001);
}
bootstrap();
