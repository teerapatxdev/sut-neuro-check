import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LineModule } from '../line/line.module';
import { GcsController } from './gcs.controller';
import { GcsService } from './gcs.service';

@Module({
  imports: [HttpModule, LineModule],
  controllers: [GcsController],
  providers: [GcsService],
  exports: [GcsService],
})
export class GcsModule {}
