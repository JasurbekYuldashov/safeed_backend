import { Module } from '@nestjs/common';
import { ZipcodeModule } from './zipcodes/zipcode.module';
import { AuthModule } from './auth/auth.module';
import { FileUploadController } from './file/file.upload.controller';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { EmailController } from './email/email.controller';
import { ArticleModule } from './article/article.module';
import { PrismaService } from './prisma/prisma.service';
import { SatisfiedModule } from './satisfied/satisfied.module';
import { HttpModule } from '@nestjs/axios';
import { PostQuoteController } from './quote/quote.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TeamUserReviewController } from './teamUserReview/teamUserReview.controller';
import { TeamUserService } from './teamUser/teamUser.service';
import { TeamUserReviewService } from './teamUserReview/teamUserReview.service';
import { TeamUserController } from './teamUser/teamUser.controller';
import { ChargeModule } from './charge/charge.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../uploads'),
      serveRoot: '/api/uploads',
      serveStaticOptions: {
        index: false,
      },
    }),
    ZipcodeModule,
    AuthModule,
    ArticleModule,
    SatisfiedModule,
    ChargeModule,
    ChargeModule
  ],
  controllers: [
    FileUploadController,
    EmailController,
    PostQuoteController,
    EmailController,
    TeamUserReviewController,
    TeamUserController,
  ],
  providers: [
    PrismaService,
    TeamUserService,
    TeamUserReviewService,
    TeamUserService,
  ],
})
export class AppModule {}
