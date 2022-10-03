import { Module } from '@nestjs/common';
import { ZipcodeModule } from "./zipcodes/zipcode.module";
import { ZipcodeController } from "./zipcodes/zipcode.controller";

@Module({
  imports: [ZipcodeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
