import { Controller, Get } from '@nestjs/common';

@Controller('liff')
export class LiffController {
  @Get('/get-liff-id')
  getLiffId() {
    const myLiffId = process.env.LIFF_ID;

    return { id: myLiffId };
  }
}
