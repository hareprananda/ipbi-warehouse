import { Controller, Res, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Approver } from 'src/auth/auth.guard';
import { Response } from 'express';

@Controller('user')
@Approver()
export class UserApproverController {
  constructor(private userService: UserService) {}
  @Get('/all-manager')
  async getManager(@Res() response: Response) {
    const data = await this.userService.getAllManager();
    response.status(data.statusCode).json(data);
  }
}
