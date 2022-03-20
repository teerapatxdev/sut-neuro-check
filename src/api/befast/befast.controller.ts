import {
  Body,
  Controller,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import {
  BEFAST_Message_1,
  BEFAST_Message_2,
  BEFAST_Message_3,
  BEFAST_Message_4,
} from 'src/helper/flex-message';
import { LineService } from '../line/line.service';

@Controller('befast')
export class BefastController {
  constructor(private readonly lineService: LineService) {}

  @Post('send-line')
  async findAll(@Headers() headers: any, @Body() body: any) {
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
      if (body.flex_message == 'ไม่มีความเสี่ยง') {
        body.statusIcon =
          'https://www.img.in.th/images/d739ae8497f2ef2cda55294185f7a2d3.png';

        const message = BEFAST_Message_1(body);
        const res = await this.lineService.sendMessage(message);
        return res;
      } else if (body.flex_message == 'ความเสี่ยงต่ำ') {
        body.statusIcon =
          'https://www.img.in.th/images/d276a65b454217171747a986f91dc4dc.png';

        const message = BEFAST_Message_2(body);
        const res = await this.lineService.sendMessage(message);
        return res;
      } else if (body.flex_message == 'ความเสี่ยงสูง') {
        if (!body.isInTime) {
          body.statusIcon =
            'https://www.img.in.th/images/5ad716b7f4589453b8fd52ada6ceddd8.png';

          const message = BEFAST_Message_3(body);
          const res = await this.lineService.sendMessage(message);
          return res;
        } else {
          body.statusIcon =
            'https://www.img.in.th/images/5ad716b7f4589453b8fd52ada6ceddd8.png';

          const message = BEFAST_Message_4(body);
          const res = await this.lineService.sendMessage(message);
          return res;
        }
      }
    }
  }
}
