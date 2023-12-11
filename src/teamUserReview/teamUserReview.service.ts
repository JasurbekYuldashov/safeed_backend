import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTeamReviewDto, UpdateTeamReviewDto } from 'src/dtos';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeamUserReviewService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.teamUserReviews.findMany({});
  }

  async getByTeamUser(id: number) {
    const checkData = await this.prisma.teamUsers.findUnique({
      where: { id },
    });
    if (!checkData) {
      throw new NotFoundException({
        error: 'Not Found',
        message: 'Team user not found',
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
    return this.prisma.teamUserReviews.findMany({
      where: { teamUserId: id },
    });
  }

  async save(data: CreateTeamReviewDto) {
    const checkData = await this.prisma.teamUsers.findUnique({
      where: { id: data.teamUserId },
    });
    if (!checkData) {
      throw new NotFoundException({
        error: 'Not Found',
        message: 'Team user not found',
        statusCode: HttpStatus.NOT_FOUND,
      });
    }

    return this.prisma.teamUserReviews.create({ data });
  }

  async update(id: number, data: UpdateTeamReviewDto) {
    let checkData = await this.prisma.teamUserReviews.findUnique({
      where: { id },
    });

    if (!checkData) {
      throw new NotFoundException({
        error: 'Not Found',
        message: 'Item not found',
        statusCode: HttpStatus.NOT_FOUND,
      });
    }

    return this.prisma.teamUserReviews.update({ data, where: { id } });
  }

  async getOne(id: number) {
    const data = await this.prisma.teamUserReviews.findUnique({ where: { id } });
    if (!data) {
      throw new NotFoundException({
        error: 'Not Found',
        message: 'Item not found',
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
    return data;
  }

  async deleteOne(id: number) {
    const data = await this.prisma.teamUserReviews.findUnique({
      where: { id },
    });
    if (!data) {
      throw new NotFoundException({
        error: 'Not Found',
        message: 'Item not found',
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
    return this.prisma.teamUserReviews.delete({ where: { id } });
  }
}
