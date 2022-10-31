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
      '1//04Nsq5vXv0PoDCgYIARAAGAQSNwF-L9Ir_9jWfEToAtx_9arQy2hDENcVTy7q1nYpY4The0Ga5wSoBWspke6ZvmpjDfs7py2nfAU',
    accessToken:
      'ya29.a0Aa4xrXO5zkt3SwWFBgrE_hmTQzuMQAvZKyVMMwC2AgpyAdg6PPDxzHVF6BtHtWC9KLY7AUeSERC3jGM5CWuom2sVggT8tjAQZF9UJts7xJuQ4rBslzW1Oq2krf5SH2BGNRLd-Pk2tck5tV0sxebAp_WW5UYwaCgYKATASARASFQEjDvL97zMThJicMQQMo7slXF8tAg0163',
    expires: 1484314697598,
  },
});

export default transporter;
