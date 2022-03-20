import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Message, RichMenu } from '@line/bot-sdk';

@Injectable()
export class LineService {
  private client: Client;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    const channelAccessToken = configService.get<string>(
      'line.channelAccessToken',
      '',
    );
    this.client = new Client({ channelAccessToken: channelAccessToken });
  }

  async getProfile(authorization: string): Promise<any> {
    try {
      const res = await this.httpService
        .get('https://api.line.me/v2/profile', {
          headers: {
            authorization: `Bearer ${authorization}`,
          },
        })
        .toPromise();
      return res.data;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async sendMessage(body: any) {
    try {
      await this.client.multicast(body.to, body.messages);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
