import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { LineModule } from './api/line/line.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { NihssModule } from './api/nihss/nihss.module';
import { LiffModule } from './liff/liff.module';
import { GcsModule } from './api/gcs/gcs.module';
import { BefastModule } from './api/befast/befast.module';

@Module({
  imports: [
    ConfigModule,
    LineModule,
    LiffModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    NihssModule,
    GcsModule,
    BefastModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
