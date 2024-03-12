import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ZipcodeService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async findAll(query?: any) {
    const response = await this.httpService.axiosRef.post(
      'https://www.montway.com/es/gis/_suggest',
      {
        city_state: {
          completion: {
            field: 'name_suggest',
            fuzzy: {
              fuzziness: 0,
            },
            size: 8,
          },
          text: query.search,
        },
      },
    );
    return response.data;
  }
  async getPrice(body?: any) {
    try {
      const api_key = this.configService.get<string>('token');
      await this.httpService.axiosRef.post("https://sft.msgplane.com/api/rest/get/price", {
        ...body,
        api_key,
      });
      return {
        message: 'Quote posted',
        statusCode: HttpStatus.OK,
        result: true,
      };
    } catch (err) {
      throw new HttpException(
        {
          message: 'Something went wrong',
          error: err,
          statusCode: HttpStatus.BAD_REQUEST,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
