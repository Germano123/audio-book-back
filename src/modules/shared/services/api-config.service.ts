import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { isNil } from 'lodash';

@Injectable()
export class ApiConfigService {
    constructor(private configService: ConfigService) {
        
    }

    get nodeEnv(): string {
        return this.get('ENVIRONMENT') || this.get('NODE_ENV') || 'local';
    }

    private get(key: string): string {
        const value = this.configService.get<string>(key);
    
        if (isNil(value)) {
          throw new Error(key + ' environment variable does not set'); // probably we should call process.exit() too to avoid locking the service
        }
    
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
}