import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, SetMetadata } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { JWTPayload } from './dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const IS_ADMIN = 'isAdmin';
export const Admin = () => SetMetadata(IS_ADMIN, true);

export const IS_APPROVER = 'isApprover';
export const Approver = () => SetMetadata(IS_APPROVER, true);

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector, private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const isAdmin = this.reflector.getAllAndOverride<boolean>(IS_ADMIN, [context.getHandler(), context.getClass()]);

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload: JWTPayload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      if (isAdmin && payload.level !== 'ADMIN') throw 'err';
      if (payload.level === 'ADMIN') {
        await this.prisma.users.findFirstOrThrow({
          where: {
            uuid: payload.uuid,
            level: 'ADMIN',
          },
        });
      }

      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
