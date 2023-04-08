import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { MonthlyDto, RequestDto } from './dto';
import { RequestService } from './request.service';
import { Public } from 'src/auth/auth.guard';
import { Response } from 'express';

@Controller('request')
export class RequestController {
  constructor(private request: RequestService) {}

  @Post()
  @Public()
  async createRequest(@Body() data: RequestDto, @Res() response: Response) {
    const create = await this.request.addRequest(data);
    response.status(create.statusCode).json(create);
  }

  @Get('monthly')
  async requestPerMonth(@Query() query: MonthlyDto, @Res() response: Response) {
    const date = new Date(query.month);
    const dataEachMonth = await this.request.requestNumberByMonth(date.getMonth() + 1, date.getFullYear());
    response.status(dataEachMonth.statusCode).json(dataEachMonth);
  }

  @Get('monthly-event')
  async monthlyEvent(@Query() query: MonthlyDto, @Res() response: Response) {
    const date = new Date(query.month);
    const data = await this.request.eventWithinMonth(date.getMonth() + 1, date.getFullYear());
    response.status(data.statusCode).json(data);
  }

  @Get('pending')
  async getPending(@Res() response: Response) {
    const data = await this.request.getPending(15);
    response.status(data.statusCode).json(data);
  }
}
