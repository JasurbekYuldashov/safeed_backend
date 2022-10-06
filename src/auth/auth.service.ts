import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findFirst({ where: { email } });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    const token = await this.jwtService.signAsync(payload, {
      secret: jwtConstants.secret,
    });
    return {
      access_token: token,
    };
  }

  async createUser(user: any) {
    const createUser = await this.prisma.user
      .create({
        data: {
          email: user.email,
          password: user.password,
          fullName: user.fullName,
        },
      })
      .catch(() => {
        throw new HttpException(
          { statusCode: HttpStatus.NOT_FOUND, error: 'Email must be unique!' },
          HttpStatus.NOT_FOUND,
        );
      });
    return { user: createUser };
  }

  async getAll() {
    return await this.prisma.user.findMany();
  }

  async getByEmail(email: string) {
    return await this.prisma.user.findFirst({ where: { email } }).catch(() => {
      throw new HttpException(
        { statusCode: HttpStatus.UNAUTHORIZED, error: 'UNAUTHORIZED' },
        HttpStatus.UNAUTHORIZED,
      );
    });
  }

  async getOne(query: any) {
    const user = await this.prisma.user
      .findFirst({ where: query })
      .catch(() => {
        throw new HttpException(
          { statusCode: HttpStatus.NOT_FOUND, error: 'Something went wrong!' },
          HttpStatus.NOT_FOUND,
        );
      });

    return { user };
  }

  async update(email: string) {
    return await this.prisma.user.findFirst({ where: { email } }).catch(() => {
      throw new HttpException(
        { statusCode: HttpStatus.UNAUTHORIZED, error: 'UNAUTHORIZED' },
        HttpStatus.UNAUTHORIZED,
      );
    });
  }
}
