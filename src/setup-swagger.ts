import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Audio Book API')
    .setDescription('API developed for an application of audio books.')
    .setVersion(`${process.env.VERSION}`)
    .addBearerAuth();

  const document = SwaggerModule.createDocument(app, options.build());
  SwaggerModule.setup('documentation', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
}
