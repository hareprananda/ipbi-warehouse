import { Controller, Get, Res } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Public } from 'src/auth/auth.guard';
import { Response } from 'express';

@Controller('contact')
@Public()
export class ContactController {
  constructor(private contact: ContactService) {}

  @Get()
  async getContact(@Res() response: Response) {
    const data = await this.contact.getAdminContact();
    response.status(data.statusCode).json(data);
  }
}
