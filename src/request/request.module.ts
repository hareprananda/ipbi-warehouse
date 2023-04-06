import { Module } from '@nestjs/common';
import { RequestController } from './request.controller';
import { RequestService } from './request.service';
import { RequesterService } from 'src/requester/requester.service';
import { HistoryModule } from 'src/history/history.module';
import { RequesterModule } from 'src/requester/requester.module';

@Module({
  controllers: [RequestController],
  providers: [RequestService, RequesterService],
  imports: [HistoryModule, RequesterModule],
})
export class RequestModule {}
