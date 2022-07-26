import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApiConfigService } from './modules/shared/services/api-config.service';
import { SharedModule } from './modules/shared/shared.module';
import { setupSwagger } from './setup-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.select(SharedModule).get(ApiConfigService);
  
  // setupSwagger(app);
  
  const PORT = configService.config.port || 8080;
  await app.listen(PORT);

  console.info(`server is running in: http://localhost:${PORT}`);
}
bootstrap();
