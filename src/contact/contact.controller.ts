import { Controller, Get } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Public } from 'src/auth/auth.guard';

@Controller('contact')
@Public()
export class ContactController {
  constructor(private contact: ContactService) {}

  @Get()
  getContact() {
    return this.contact.getAdminContact();
  }
}
