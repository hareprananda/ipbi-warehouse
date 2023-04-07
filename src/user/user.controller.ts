import { Body, Controller, Post, Patch, Param, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { AddPayload } from './dto';
import { Admin } from 'src/auth/auth.guard';
import { Response } from 'express';

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
}
