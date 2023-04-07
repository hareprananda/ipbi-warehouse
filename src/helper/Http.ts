export const HttpReturn = <T>(returned: T, statusCode: number) => {
  const obj: { data?: T; message?: T[] | string; statusCode: number } = { statusCode };

  if (statusCode >= 400) {
    obj['message'] = Array.isArray(returned) ? returned : [returned];
  } else {
    obj['data'] = returned;
    obj['message'] = 'Ok';
  }
  return obj;
};

export type HttpReturnType = ReturnType<typeof HttpReturn>;
