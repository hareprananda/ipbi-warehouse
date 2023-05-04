import { Body, Controller, Post, Res, Req, Get, Query, Param, Patch, Delete } from '@nestjs/common';
import { UUIDParam, GoodsPayload, GoodsQuery, History, GoodsType } from './dto';
import { Response } from 'express';
import { GoodsService } from './goods.service';
import { Request } from 'src/helper';
import { HistoryService } from 'src/history/history.service';
import { Public } from 'src/auth/auth.guard';
// import { GoodsService } from './goods.service';

@Controller('goods')
export class GoodsController {
  constructor(private goods: GoodsService, private history: HistoryService) {}

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

  @Get('/:id/history')
  async getHistory(@Query() query: History, @Param() param: UUIDParam, @Res() response: Response) {
    const { page, limit } = query;
    const data = await this.history.getByGoods(param.id, {
      page: parseInt(page || '1'),
      limit: parseInt(limit || '20'),
    });
    response.status(data.statusCode).json(data);
  }

  @Get()
  async getGoods(@Query() { limit, name, page }: GoodsQuery, @Res() response: Response) {
    const data = await this.goods.getGoods(name || '', { limit: parseInt(limit || '20'), page: parseInt(page || '1') });
    response.status(data.statusCode).json(data);
  }

  @Patch('/:id')
  async updateGoods(
    @Body() payload: GoodsPayload,
    @Param() param: UUIDParam,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const userUuid = req.user.uuid;
    const data = await this.goods.updateGoods(userUuid, param.id, payload);
    res.status(data.statusCode).json(data);
  }

  @Delete('/:id')
  async deleteGoods(@Param() param: UUIDParam, @Res() res: Response) {
    const { id: uuid } = param;
    const data = await this.goods.deleteGoods(uuid);
    res.status(data.statusCode).json(data);
  }

  @Get('/all')
  @Public()
  async getAll(@Query() query: GoodsType, @Res() response: Response) {
    const { type } = query;
    const data = await this.goods.getAllGoods(type);
    response.status(data.statusCode).json(data);
  }
}
