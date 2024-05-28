// src/users/users.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UserId } from '../decorators/user-id.decorator';

@Controller('users')
export class UsersController {
  @Get('profile')
  getProfile(@UserId() userId: string) {
    return {
      message: `User ID is: ${userId}`,
    };
  }
}
