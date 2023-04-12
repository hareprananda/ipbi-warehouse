import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { GetRequesterDto } from './dto';
import { RequesterService } from './requester.service';

@Controller('requester')
export class RequesterController {
  constructor(private requester: RequesterService) {}

  @Get()
  async getRequester(@Query() q: GetRequesterDto, @Res() response: Response) {
    const { limit, page, ...filter } = q;
    const data = await this.requester.getRequester(filter, {
      limit: limit || 20,
      page: page || 1,
    });
    response.status(data.statusCode).json(data);
  }
}
