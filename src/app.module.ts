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

@Module({
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    UserModule,
    RequestModule,
    RequesterModule,
    HistoryModule,
    ContactModule,
  ],
})
export class AppModule {}
