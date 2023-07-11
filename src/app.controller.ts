import { Controller, Get } from '@nestjs/common';
import { RestService } from './rest.service';

@Controller()
export class AppController {
  constructor(private readonly appService: RestService) {
    console.log('AppController Constructor');
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
