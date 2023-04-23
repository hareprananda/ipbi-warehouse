import { Body, Controller, Post, Patch, Param, Res, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { AddPayload, UserQuery } from './dto';
import { Admin } from 'src/auth/auth.guard';
import { Response } from 'express';
import { Query } from '@nestjs/common/decorators';

@Controller('user')
@Admin()
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async add(@Body() payload: AddPayload, @Res() response: Response) {
    payload.phoneNumber = payload.phoneNumber.toString();
    const res = await this.userService.add(payload);
    response.status(res.statusCode).json(res);
  }

  @Patch('/:id/active')
  async setContactActive(@Param('id') id: string, @Res() response: Response) {
    const res = await this.userService.setContactActive(id);
    response.status(res.statusCode).json(res);
  }

  @Get()
  async getUsers(@Query() q: UserQuery, @Res() response: Response) {
    const { limit, page } = q;
    const data = await this.userService.getUser({ limit: parseInt(limit || '20'), page: parseInt(page || '1') });
    response.status(data.statusCode).json(data);
  }

  @Get('/all-manager')
  async getManager(@Res() response: Response) {
    const data = await this.userService.getAllManager();
    response.status(data.statusCode).json(data);
  }
}
