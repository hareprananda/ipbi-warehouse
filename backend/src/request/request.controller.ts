import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { ChangeStatusDto, DailyDto, DetailParam, MonthlyDto, RequestDto, RequestQuery } from './dto';
import { RequestService } from './request.service';
import { Public } from 'src/auth/auth.guard';
import { Response } from 'express';
import { Param, Patch, Req } from '@nestjs/common/decorators';
import { HttpReturn, Request } from 'src/helper';

@Controller('request')
export class RequestController {
  constructor(private request: RequestService) {}

  @Post()
  @Public()
  async createRequest(@Body() data: RequestDto, @Res() response: Response) {
    if (data.goods.length === 0) {
      response.status(400).json(HttpReturn(`Goods can't be empty`, 400));
      return;
    }
    const create = await this.request.addRequest(data);
    response.status(create.statusCode).json(create);
  }

  @Get('monthly')
  async requestPerMonth(@Query() query: MonthlyDto, @Res() response: Response) {
    const date = new Date(query.month);
    const dataEachMonth = await this.request.requestNumberByMonth(date.getMonth() + 1, date.getFullYear());
    response.status(dataEachMonth.statusCode).json(dataEachMonth);
  }

  @Get('/event/daily')
  async monthlyEvent(@Query() query: DailyDto, @Res() response: Response) {
    const data = await this.request.requestDaily(query.date);
    response.status(data.statusCode).json(data);
  }

  @Get('pending')
  async getPending(@Res() response: Response) {
    const data = await this.request.getPending(15);
    response.status(data.statusCode).json(data);
  }

  @Get()
  async getRequest(@Query() query: RequestQuery, @Res() response: Response) {
    const { limit, page, ...filter } = query;
    const data = await this.request.getRequest(filter, { limit: parseInt(limit || '20'), page: parseInt(page || '1') });
    response.status(data.statusCode).json(data);
  }

  @Get('/detail/:id')
  async getDetail(@Param() param: DetailParam, @Res() response: Response) {
    const data = await this.request.requestDetail(param.id);
    response.status(data.statusCode).json(data);
  }

  @Patch('/:id')
  async changeStatus(
    @Param() param: DetailParam,
    @Body() body: ChangeStatusDto,
    @Res() response: Response,
    @Req() req: Request,
  ) {
    const userUUID = req.user.uuid;
    const data = await this.request.changeStatus(param.id, body.status, userUUID);
    response.status(data.statusCode).json(data);
  }
}
