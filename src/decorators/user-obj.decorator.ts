import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserObj = createParamDecorator(
  async (data, context: ExecutionContext) => {
    return context.switchToHttp().getRequest().user;
  },
);
