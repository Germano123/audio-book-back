import { HttpModule } from "@nestjs/axios";
import { Global, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ApiConfigService } from "./services/api-config.service";

const providers = [ApiConfigService, ConfigService]

@Global()
@Module({
    providers,
    imports: [
        // JwtModule.forRootAsync({}),
        HttpModule,
    ],
    exports: [ ...providers, HttpModule, /*JwtModule*/ ]
})
export class SharedModule {}