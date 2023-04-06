import { IsNumberString, IsNotEmpty } from 'class-validator';

export class RequesterDto {
  @IsNumberString()
  phoneNumber: string;

  @IsNotEmpty()
  name: string;
}
