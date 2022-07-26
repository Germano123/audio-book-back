import { Module } from "@nestjs/common";
import { ApiConfigService } from "./services/api-config.service";

const providers = [ApiConfigService]

@Module({
    providers,
    controllers: [],
    exports: [],
    imports: [],
})
export class SharedModule {}