import { Body, Controller, Get, Header, Headers, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LineService } from './line.service';

@Controller('line')
@ApiTags('LineOA')
export class LineController {
  constructor(private readonly lineService: LineService) {}

  @Post('send-message')
  async sendMessage(@Headers() headers: any, @Body() message: any) {
    const res = await this.lineService.sendMessage(message);
    return res;
  }
}
