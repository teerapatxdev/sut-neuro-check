import {
  Body,
  Controller,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { NIHSSMessage } from 'src/helper/flex-message';
import { LineService } from '../line/line.service';

@Controller('nihss')
export class NihssController {
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
      if (body.result >= 25) {
        body.statusResult = 'อยู่ในระดับรุนแรงมาก';
        body.statusIcon =
          'https://www.img.in.th/images/5ad716b7f4589453b8fd52ada6ceddd8.png';
      } else if (body.result >= 15 && body.result <= 24) {
        body.statusResult = 'อยู่ในระดับรุนแรง';
        body.statusIcon =
          'https://www.img.in.th/images/1d1a63fc1480dd90a0bcf586f18ee71f.png';
      } else if (body.result >= 5 && body.result <= 14) {
        body.statusResult = 'อยู่ในระดับน้อย-ปานกลาง';
        body.statusIcon =
          'https://www.img.in.th/images/390ed4b2fdd478c888b03f3debb26b63.png';
      } else {
        body.statusResult = 'อยู่ในระดับน้อยมาก';
        body.statusIcon =
          'https://www.img.in.th/images/d739ae8497f2ef2cda55294185f7a2d3.png';
      }
      const message = NIHSSMessage(body);
      const res = await this.lineService.sendMessage(message);
      return res;
    }
  }
}
