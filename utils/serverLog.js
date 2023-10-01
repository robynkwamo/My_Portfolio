const bunyan = require('bunyan');
const bformat = require('bunyan-format');

const formatOut = bformat({ outputMode: 'long' });

const log = bunyan.createLogger({
  name: 'LSU-Tech',
  src: true,
  serializers: bunyan.stdSerializers,
  streams: [
    {
      level: 'info',
      stream: formatOut,
    },
    {
      level: 'error',
      path: 'debug.log',
    },
  ],
});

module.exports = log;
