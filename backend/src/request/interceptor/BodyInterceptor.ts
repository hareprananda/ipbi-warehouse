import { ExecutionContext, Injectable, NestInterceptor, CallHandler, BadRequestException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class BodyInterceptor implements NestInterceptor {
  constructor(private keys: string[]) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest<Request>();

    try {
      for (const key of this.keys) request.body[key] = JSON.parse(request.body[key]);
    } catch (err) {
      throw new BadRequestException(err.message);
    }

    return next.handle();
  }
}
