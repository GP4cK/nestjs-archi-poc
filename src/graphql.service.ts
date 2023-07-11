import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class GraphQLService {
  constructor(@InjectDataSource() private dataSource: DataSource) {
    console.log('GraphQLService Constructor');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
