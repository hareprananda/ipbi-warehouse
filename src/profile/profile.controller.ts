import { Body, Controller, Patch, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { Request } from 'src/helper';
import { ChangeProfilePayload } from './dto';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profile: ProfileService) {}

  @Patch()
  async changeProfile(@Body() body: ChangeProfilePayload, @Req() req: Request, @Res() response: Response) {
    const { uuid } = req.user;
    const data = await this.profile.changeProfile(uuid, body);
    response.status(data.statusCode).json(data);
  }
}
