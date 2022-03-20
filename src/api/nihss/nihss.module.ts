import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { LineModule } from '../line/line.module';
import { NihssController } from './nihss.controller';
import { NihssService } from './nihss.service';

@Module({
  imports: [HttpModule, LineModule],
  controllers: [NihssController],
  providers: [NihssService],
  exports: [NihssService],
})
export class NihssModule {}
