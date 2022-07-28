import type { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from './src/snake-naming.strategy';
import * as dotenv from "dotenv";

process.env.NODE_ENV = process.env.ENVIRONMENT || process.env.NODE_ENV || 'local';
console.log('ENVIRONMENT: ' + process.env.NODE_ENV);

dotenv.config({
  path: `.${process.env.NODE_ENV}.env`,
});

const configs: TypeOrmModuleOptions & { seeds: string[]; factories: string[] } = {
    type: 'postgres',
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USERNAME),
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
    namingStrategy: new SnakeNamingStrategy(),
    subscribers: [],
    entities: [
      'src/modules/**/*.entity{.ts,.js}',
      'src/modules/**/*.view-entity{.ts,.js}',
    ],
    migrations: ['src/database/migrations/*{.ts,.js}'],
    seeds: ['src/database/seeds/**/*{.ts,.js}'],
    factories: ['src/database/factories/**/*{.ts,.js}'],
  };

module.exports = configs;