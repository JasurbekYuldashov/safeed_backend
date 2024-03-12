import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ZipcodeController } from './zipcode.controller';
import { ZipcodeService } from './zipcode.service';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    HttpModule.register({
      timeout: 50000,
      maxRedirects: 5,
    }),
  ],
  controllers: [ZipcodeController],
  providers: [ZipcodeService],
})
export class ZipcodeModule {}
