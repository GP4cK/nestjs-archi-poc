import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import type { Request } from 'express';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  private readonly databaseID?: string;

  constructor(@Inject(REQUEST) readonly req: Request) {
    // Pretend to extract the database ID from the JWT.
    this.databaseID = 'test';
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      database: ':memory',
      name: this.databaseID,
      autoLoadEntities: true,
      type: 'better-sqlite3',
    };
  }
}
