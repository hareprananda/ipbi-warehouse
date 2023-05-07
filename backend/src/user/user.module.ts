import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserApproverController } from './userApprover.controller';

@Module({
  providers: [UserService],
  controllers: [UserController, UserApproverController],
  exports: [UserService],
})
export class UserModule {}
