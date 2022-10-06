import { Module } from '@nestjs/common';
import { ZipcodeModule } from './zipcodes/zipcode.module';
import { AuthModule } from './auth/auth.module';
import { FileUploadController } from './file/file.upload.controller';

@Module({
  imports: [ZipcodeModule, AuthModule],
  controllers: [FileUploadController],
  providers: [],
})
export class AppModule {}
