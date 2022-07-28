import { Injectable } from '@nestjs/common';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { isNil } from 'lodash';
import { SnakeNamingStrategy } from 'src/snake-naming.strategy';
import * as dotenv from 'dotenv';

@Injectable()
export class ApiConfigService {
  constructor() {
    const nodeEnv = this.nodeEnv;

    dotenv.config({
      path: `.${nodeEnv}.env`,
    });

    console.log(`Using ${nodeEnv} environment.`);

    // Replace \\n with \n to support multiline strings in AWS
    // for (const envName of Object.keys(process.env)) {
    //     process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
    // }
  }

  get nodeEnv(): string {
    return this.get('ENVIRONMENT') || this.get('NODE_ENV') || 'local';
  }

  private get(key: string): string {
    // const value = this.configService.get<string>(key);
    const value = process.env[key];

    if (isNil(value)) {
      console.log(`${key} variable not set`);
      //   throw new Error(key + ' environment variable does not set'); // probably we should call process.exit() too to avoid locking the service
    }

    return value;
  }

  public getString(key: string): string {
    const value = this.get(key);

    return value.replace(/\\n/g, '\n');
  }

  public getBoolean(key: string): boolean {
    const value = this.get(key);

    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(key + ' env var is not a boolean');
    }
  }

  public getNumber(key: string): number {
    const value = this.get(key);

    try {
      return Number(value);
    } catch {
      throw new Error(key + ' environment variable is not a number');
    }
  }

  get config() {
    return {
      port: this.getString('PORT'),
    };
  }

  get typeOrmConfig(): TypeOrmModuleOptions {
    const entities = [__dirname + '/../../modules/**/*.entity{.ts,.js}'];
    const migrations = [__dirname + '/../../migrations/*{.ts,.js}'];

    return {
      entities,
      migrations,
      keepConnectionAlive: true,
      type: 'postgres',
      host: this.getString('DB_HOST'),
      port: this.getNumber('DB_PORT'),
      username: this.getString('DB_USERNAME'),
      password: this.getString('DB_PASSWORD'),
      database: this.getString('DB_DATABASE'),
      subscribers: [],
      migrationsRun: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
