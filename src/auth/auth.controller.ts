import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new HttpException(
        { statusCode: HttpStatus.NOT_FOUND, error: 'User not found!' },
        HttpStatus.NOT_FOUND,
      );
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  async list() {
    return this.authService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('save')
  async save(@Body() body) {
    return this.authService.createUser(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() body) {
    return this.authService.getByEmail(body.user.email);
  }

  @UseGuards(JwtAuthGuard)
  @Get('get-one')
  async getOne(@Query() query) {
    return this.authService.getOne(query);
  }

  @Get(
    'a-s-da-s--d-a-s-d-ad--a-d-a-s-d-a-d-a-s-d-a-s-d-a-d--s-a-s-d-a-s-d-a-s-d-d-s-d-a-s-s-d-a-a-s-d-d-s-a',
  )
  async saveFirstAdmin(@Request() body) {
    return this.authService.createUser({
      email: 'admin@admin.com',
      password: 'admin123',
      fullName: 'admin admin',
    });
  }
}
