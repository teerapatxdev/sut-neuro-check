import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { TransformInterceptor } from './http-interceptor';
import { HttpExceptionFilter } from './http-exception';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('SUT Nuero Check')
    .setVersion('1.0')
    .build();

  app.setGlobalPrefix('api');
  app.enableCors({
    credentials: true,
    origin: (origin, callback) => {
      return callback(null, true);
    },
    methods: 'GET,POST',
  });

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);
  app.use(morgan('tiny'));
  await app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(config.get<number>('app.PORT', 3000));
  console.log(`service start on ${await app.getUrl()}`);
}

bootstrap();
