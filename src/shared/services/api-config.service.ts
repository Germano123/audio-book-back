import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { isNil } from 'lodash';
import { SnakeNamingStrategy } from "src/snake-naming.strategy";

@Injectable()
export class ApiConfigService {
    constructor(private configService: ConfigService) {
        const nodeEnv = this.nodeEnv;

        // Replace \\n with \n to support multiline strings in AWS
        // for (const envName of Object.keys(process.env)) {
        //     process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        // }
    }

    get nodeEnv(): string {
        return this.get('ENVIRONMENT') || this.get('NODE_ENV') || 'local';
    }

    private get(key: string): string {
        const value = this.configService.get<string>(key);
    
        // if (isNil(value)) {
        //   throw new Error(key + ' environment variable does not set'); // probably we should call process.exit() too to avoid locking the service
        // }
    
        return value;
    }

    public getString(key: string): string {
        return "";
    }

    public getBoolean(key: string): boolean {
        return false;
    }

    public getNumber(key: string): number {
        return 0;
    }

    get config() {
        return {
            port: this.getString("PORT"),
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
            host: this.get('DB_HOST'),
            port: this.getNumber('DB_PORT'),
            username: this.get('DB_USERNAME'),
            password: this.get('DB_PASSWORD'),
            database: this.get('DB_DATABASE'),
            subscribers: [],
            migrationsRun: true,
            logging: true,
            namingStrategy: new SnakeNamingStrategy(),
        }
    }
}