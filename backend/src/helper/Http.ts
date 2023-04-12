import { HttpStatus } from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { JWTPayload } from 'src/auth/dto/auth.dto';
import * as core from 'express-serve-static-core';

type Success<T> = {
  data: T;
  message: string;
  statusCode: number;
};

type Error<T> = {
  data: false;
  message: T[];
  statusCode: number;
};

type SuccessStatus = HttpStatus.OK | HttpStatus.CREATED | HttpStatus.ACCEPTED;
type HttpReturnType<T, Y> = Y extends SuccessStatus ? Success<T> : Error<T>;

export const HttpReturn = <T, Y extends HttpStatus>(returned: T, statusCode: Y): HttpReturnType<T, Y> => {
  const obj: { data?: T; message?: T[] | string; statusCode: number } = { statusCode };
  if (statusCode >= 400) {
    obj['error'] = true;
    obj['message'] = Array.isArray(returned) ? returned : [returned];
  } else {
    obj['data'] = returned;
    obj['message'] = 'Ok';
    obj['error'] = false;
  }
  return obj as HttpReturnType<T, Y>;
};

export type Request<T = any> = ExpressRequest<core.ParamsDictionary, any, any, T> & { user: JWTPayload };
