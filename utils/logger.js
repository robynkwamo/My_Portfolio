const winston = require('winston');
const expressWinston = require('express-winston');
require('winston-mongodb');

const logs = expressWinston.logger({
  transports: [
    new winston.transports.MongoDB({
      db: process.env.DATABASE_URL,
      options: { useUnifiedTopology: true },
      metaKey: 'meta',
    }),
  ],
  format: winston.format.json({ space: 2 }),
  meta: true, // optional: control whether you want to log the meta data about the request (default to true)
  msg: 'This Req HTTP {{req.method}} {{req.url}} with status {{res.statusCode}} was made by {{req.user}}', // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
});

const convertErrorToGoodFormat = (err) => {
  if (!err.request || !err.response) return;
  delete err.request;
  err.response = {
    data: err.response.data,
    status: err.response.status,
    statusText: err.response.statusText,
    headers: err.response.headers,
  };
};

module.exports = {
  convertErrorToGoodFormat,
  logs,
};
