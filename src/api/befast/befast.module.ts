import { Module } from '@nestjs/common';
import { BefastService } from './befast.service';
import { BefastController } from './befast.controller';
import { HttpModule } from '@nestjs/axios';
import { LineModule } from '../line/line.module';

@Module({
  imports: [HttpModule, LineModule],
  providers: [BefastService],
  controllers: [BefastController],
  exports: [BefastService],
})
export class BefastModule {}
