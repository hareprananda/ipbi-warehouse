import { Body, Controller, Post } from '@nestjs/common';
import { RequestDto } from './dto';
import { RequestService } from './request.service';
import { Public } from 'src/auth/auth.guard';

@Controller('request')
@Public()
export class RequestController {
  constructor(private request: RequestService) {}

  @Post()
  async createRequest(@Body() data: RequestDto) {
    return await this.request.addRequest(data);
  }
}
