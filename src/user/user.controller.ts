import { Body, Controller, Post, Patch, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { AddPayload } from './dto';
import { Admin } from 'src/auth/auth.guard';

@Controller('user')
@Admin()
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  add(@Body() payload: AddPayload) {
    payload.phoneNumber = payload.phoneNumber.toString();
    return this.userService.add(payload);
  }

  @Patch('/:id/active')
  setContactActive(@Param('id') id: string) {
    return this.userService.setContactActive(id);
  }
}
