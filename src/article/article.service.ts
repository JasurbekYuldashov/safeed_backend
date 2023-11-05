import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IsNumber } from 'class-validator';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async getAll(query?: any) {
    const take =
      query.take && Number.isInteger(parseInt(query.take))
        ? +query.take
        : undefined;
    return this.prisma.article.findMany({
      orderBy: { updatedAt: 'desc' },
      take,
    });
  }

  async save(data?: any) {
    return this.prisma.article.create({ data });
  }

  async update(id: number, data?: any) {
    return this.prisma.article
      .update({ where: { id: +id }, data })
      .catch((e) => {
        throw new Error('Item not found');
      });
  }

  async getOne(id?: number): Promise<any> {
    return await this.prisma.article
      .findUnique({ where: { id: +id } })
      .catch(() => {
        throw new Error('Item not found');
      });
  }

  async delete(id?: number): Promise<any> {
    return await this.prisma.article
      .delete({ where: { id: +id } })
      .catch(() => {
        throw new Error('Item not found');
      });
  }
}
