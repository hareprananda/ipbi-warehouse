import { Body, Controller, Post, Res, Req, Get } from '@nestjs/common';
import { GoodsPayload } from './dto';
import { Response } from 'express';
import { GoodsService } from './goods.service';
import { Request } from 'src/helper';
// import { GoodsService } from './goods.service';

@Controller('goods')
export class GoodsController {
  constructor(private goods: GoodsService) {}

  @Post()
  async addGoods(@Body() payload: GoodsPayload, @Res() response: Response, @Req() req: Request) {
    const data = await this.goods.addGoods(req.user.uuid, payload);
    response.status(data.statusCode).json(data);
  }

  @Get('recent-change')
  async recentChange(@Res() response: Response) {
    const data = await this.goods.getRecentChange(12);
    response.status(data.statusCode).json(data);
  }
}
