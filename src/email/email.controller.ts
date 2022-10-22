import { Body, Controller, Post } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Controller('email')
export class EmailController {
  @Post('/send')
  async sendEmail(@Body() body: any) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'safeed12341@gmail.com',
        clientId:
          '1037149241439-761olb4c8bppja86cqbrcbifm5qtigja.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken:
          '1//04pFnCTsO31eqCgYIARAAGAQSNwF-L9IrEKu841Orjq3a_Zip8qkrOBisIXN5gt396L8ZrNYOSpzaeeiqsVcxjMxgKjdyBjB8cZ8',
        accessToken:
          'ya29.a0Aa4xrXOBI705pnwVj7KDul30jmlcrirwxgYvyaKduQXwdc4jSeDB1mCFfov6bxA8UkGarSOxpFHxloO_vXOfkR4VgwOv2JkD6uhc5g5zvvmhwAzbawNr1cB6eGIrPFeLpjsN54pi7HEEbnx-H5kEg73knd5AaCgYKATASARASFQEjDvL99dtEdxp8xFdcqVcAC1kb-g0163',
        expires: 1484314697598,
      },
    });
    // var transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   type: "SMTP",
    //   host: "smtp.gmail.com",
    //   secure: true,
    //   auth: {
    //     user: 'safeed12341@gmail.com',
    //     pass: 'Safeed123456'
    //   }
    // });

    const mailOptions = {
      from: 'safeed12341@gmail.com',
      to: body.email,
      subject: body.subject,
      html: body.body,
    };
    const send = await transporter.sendMail(mailOptions);
    return send;
  }
}
