import { Body, Controller, Get, Post } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Controller('email')
export class EmailController {
  //{
  //     service: 'Gmail',
  //     auth: {
  //       type: 'OAuth2',
  //       user: 'user@example.com',
  //       clientId: '000000000000-xxx0.apps.googleusercontent.com',
  //       clientSecret: 'XxxxxXXxX0xxxxxxxx0XXxX0',
  //       refreshToken: '1/XXxXxsss-xxxXXXXXxXxx0XXXxxXXx0x00xxx',
  //       accessToken: 'ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x',
  //       expires: 1484314697598,
  //     },
  //   }

  @Post('/send')
  async sendEmail(@Body() body: any) {
    console.log('asdasd');

    const {
      smtp: { host, port, secure },
      user,
      pass,
    } = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const mailOptions = {
      from: user,
      to: body.email,
      subject: body.subject,
      html: body.body,
    };
    const send = await transporter.sendMail(mailOptions);
    return send;
  }
}
