import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostDomain = AppModule.isDev ? `${AppModule.host}:${AppModule.port}` : AppModule.host;
  const swaggerOptions = new DocumentBuilder()
        .setTitle('Nest MEAN')
        .setDescription('API Documentation')
        .setVersion('1.0.0')
        // .setHost(hostDomain.split('//')[1])
        // .setSchemes(AppModule.isDev ? 'http' : 'https')
        .setBasePath('/api')
        .addBearerAuth()
        .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('/api/docs', app, swaggerDoc, {
    swaggerUrl: `${hostDomain}/api/docs-json`,
    explorer: true,
    swaggerOptions: {
        docExpansion: 'list',
        filter: true,
        showRequestDuration: true,
    },
  });
  app.setGlobalPrefix('api');
  await app.listen(AppModule.port);
}
bootstrap();