import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('/')
  async getAll(@Query() query?: any) {
    const data = await this.companyService.getAll(query).catch((e) => {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: e.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    });

    return { data, statusCode: HttpStatus.OK };
  }

  @Post('/')
  async save(@Body() body) {
    const data = await this.companyService.save(body).catch((e) => {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'name field is required and string',
        },
        HttpStatus.BAD_REQUEST,
      );
    });

    return { data, statusCode: HttpStatus.OK };
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() body: any) {
    const data = await this.companyService.update(id, body).catch((e) => {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: 'name field is required and string',
        },
        HttpStatus.BAD_REQUEST,
      );
    });

    return { data, statusCode: HttpStatus.OK };
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    const data = await this.companyService.getOne(id).catch((e) => {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: e.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    });

    return { data, statusCode: HttpStatus.OK };
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    const data = await this.companyService.delete(id).catch((e) => {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: e.message,
        },
        HttpStatus.BAD_REQUEST,
      );
    });

    return { data, statusCode: HttpStatus.OK };
  }
}
