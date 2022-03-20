import {
  Body,
  Controller,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { GCSMessage } from 'src/helper/flex-message';
import { LineService } from '../line/line.service';

@Controller('gcs')
export class GcsController {
  constructor(private readonly lineService: LineService) {}

  @Post('send-line')
  async findAll(@Headers() headers: any, @Body() body: any) {
    body.result = Number(body.result);
    const authorization = headers.authorization as string;
    if (!authorization) {
      throw new UnauthorizedException();
    }
    if (authorization) {
      const lineToken = authorization.split(' ')[1];
      if (!lineToken) {
        throw new UnauthorizedException();
      }
      const lineProfile = await this.lineService.getProfile(lineToken);
      if (!lineProfile) {
        throw new UnauthorizedException();
      }
      body.lineUserId = lineProfile.userId;
      if (!body.disease) {
        body.disease = 'ไม่มี';
      }
      if (body.result >= 13 && body.result <= 15) {
        body.statusResult = 'บาดเจ็บที่ศีรษะเล็กน้อย';
        body.statusIcon =
          'https://www.img.in.th/images/d739ae8497f2ef2cda55294185f7a2d3.png';
      } else if (body.result >= 9 && body.result <= 12) {
        body.statusResult = 'บาดเจ็บที่ศีรษะปานกลาง';
        body.statusIcon =
          'https://www.img.in.th/images/1d1a63fc1480dd90a0bcf586f18ee71f.png';
      } else {
        body.statusResult = 'บาดเจ็บที่ศีรษะรุนแรง';
        body.statusIcon =
          'https://www.img.in.th/images/5ad716b7f4589453b8fd52ada6ceddd8.png';
      }
      const message = GCSMessage(body);
      const res = await this.lineService.sendMessage(message);
      return res;
    }
  }
}
