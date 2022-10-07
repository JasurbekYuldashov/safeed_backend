import { Module } from '@nestjs/common';
import { ZipcodeModule } from './zipcodes/zipcode.module';
import { AuthModule } from './auth/auth.module';
import { FileUploadController } from './file/file.upload.controller';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../uploads'),
      serveRoot: '/uploads',
      serveStaticOptions: {
        index: false,
      },
    }),
    ZipcodeModule,
    AuthModule,
  ],
  controllers: [FileUploadController],
  providers: [],
})
export class AppModule {}
