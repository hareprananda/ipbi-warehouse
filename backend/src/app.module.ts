import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { RequestModule } from './request/request.module';
import { RequesterModule } from './requester/requester.module';
import { HistoryModule } from './history/history.module';
import { ContactModule } from './contact/contact.module';
import { GoodsModule } from './goods/goods.module';
import { CommonModule } from './common/common.module';
import { ProfileModule } from './profile/profile.module';
import { ReportController } from './report/report.controller';
import { ReportService } from './report/report.service';
import { ReportModule } from './report/report.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import path from 'path';

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: false }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public'),
    }),
    AuthModule.forRoot(),
    PrismaModule,
    UserModule,
    RequestModule,
    RequesterModule,
    HistoryModule,
    ContactModule,
    GoodsModule,
    CommonModule,
    ProfileModule,
    ReportModule,
  ],
})
export class AppModule {}
