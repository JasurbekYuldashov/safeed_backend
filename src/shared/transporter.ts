import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'safeed12341@gmail.com',
    clientId:
      '1037149241439-761olb4c8bppja86cqbrcbifm5qtigja.apps.googleusercontent.com',
    clientSecret: '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',
    refreshToken:
      '1//04QgS9y3AJSWsCgYIARAAGAQSNwF-L9IrbtZxOQaGppzYf2dysnXtLxfeQaRZdiui6OVfZeGQh3Q-uFkvByeWdnRf8gqvBPRLYiM',
    accessToken:
      'ya29.a0AeTM1ich4Iyctf4N65QjgFceABBanjTLhwtCplJzG6fA0zNvb-vxavnc_-2MshFXdlSd0-yxpbkeywzntD-cWq5P1sAK1e5Co_vO9TmzwC9Fsbg_V6UO4LATE4nyq7lrqAGNyL-OWWp6QRquNnYQeTlOpQhQaCgYKAQoSARASFQHWtWOmoaiddFgqs7zbGuRYwq8OhQ0163',
    expires: 1484314697598,
  },
});

export default transporter;
