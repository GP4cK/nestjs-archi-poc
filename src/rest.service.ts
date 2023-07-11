import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class RestService {
  constructor(@InjectDataSource() private dataSource: DataSource) {
    console.log('RestService Constructor');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
