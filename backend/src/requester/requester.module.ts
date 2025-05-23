import { Module } from '@nestjs/common';
import { RequesterService } from './requester.service';
import { RequesterController } from './requester.controller';

@Module({
  providers: [RequesterService],
  exports: [RequesterService],
  controllers: [RequesterController],
})
export class RequesterModule {}
