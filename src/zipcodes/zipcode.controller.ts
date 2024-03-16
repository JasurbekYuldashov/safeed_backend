import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ZipcodeService } from "./zipcode.service";

@Controller("zipcode")
export class ZipcodeController {
  constructor(private readonly zipcodeService: ZipcodeService) {
  }

  @Post("/")
  async get(@Query() query: any) {
    return this.zipcodeService.findAll(query);
  }  
  
  @Post("/price")
  async getPrice(@Body() query: any) {
    return this.zipcodeService.getPrice(query);
  }
}
