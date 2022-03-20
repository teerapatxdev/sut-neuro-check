import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import AppConfig from './app.config';
import lineConfig from './line.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [
        () => ({
          app: AppConfig(),
          line: lineConfig(),
        }),
      ],
    }),
  ],
})
export class ConfigModule {}
