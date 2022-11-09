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
      '1//04qEoBXhnwB0wCgYIARAAGAQSNwF-L9IriP3S_pt0g3IU2FfjYHgLNqTpTmF9cKF8FpdWwqGMlQX2I7aXfiEGGLZrJnHcJ0SlbR0',
    accessToken:
      'ya29.a0AeTM1idiHc8zN_Tcccg7LnNDpAUYJs82CQDBJ5gQ8Ro9NyZBrmbAI7xOICvK1qaq5-YceSHSAYICSOqFc2uTl1Hk4q72U_iaFIcUSXuFc6eXZFozhDjpT5viBSxzNfAnyidTMm5qyVAH3O-bGWik9M3qtbfJaCgYKAQoSAQ8SFQHWtWOmXoPYIpWNO200Wgif2ui4rg0163',
    expires: 1484314697598,
  },
});

export default transporter;
