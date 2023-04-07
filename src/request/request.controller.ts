import { Body, Controller, Post, Res } from '@nestjs/common';
import { RequestDto } from './dto';
import { RequestService } from './request.service';
import { Public } from 'src/auth/auth.guard';
import { Response } from 'express';

@Controller('request')
@Public()
export class RequestController {
  constructor(private request: RequestService) {}

  @Post()
  async createRequest(@Body() data: RequestDto, @Res() response: Response) {
    const create = await this.request.addRequest(data);
    response.status(create.statusCode).json(create);
  }
}
