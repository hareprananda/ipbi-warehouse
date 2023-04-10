import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';
import { GoodsService } from './goods.service';
import { UserModule } from 'src/user/user.module';
import { HistoryModule } from 'src/history/history.module';

@Module({
  controllers: [GoodsController],
  providers: [GoodsService],
  imports: [UserModule, HistoryModule],
  exports: [GoodsService],
})
export class GoodsModule {}
